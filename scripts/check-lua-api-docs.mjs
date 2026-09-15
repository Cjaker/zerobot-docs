import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const coreIndex = args.indexOf("--core");
const coreDir = coreIndex >= 0 ? args[coreIndex + 1] : process.env.ZEROBOT_CORE_DIR;

if (!coreDir) {
  console.error('Pass --core "<Scripts/core path>" or set ZEROBOT_CORE_DIR.');
  process.exit(2);
}

const root = path.resolve(import.meta.dirname, "..");
const docsDir = path.join(root, "docs");
const translationsDir = path.join(root, "i18n", "pt", "docusaurus-plugin-content-docs", "current");
const enDir = path.join(root, "docs", "lua_scripting", "functions");
const ptDir = path.join(root, "i18n", "pt", "docusaurus-plugin-content-docs", "current", "lua_scripting", "functions");
const modules = {
  "cavebot.lua": "cavebot.md",
  "client.lua": "client.md",
  "container.lua": "container.md",
  "creature.lua": "creature.md",
  "custom_modal_window.lua": "custom_modal.md",
  "engine.lua": "engine.md",
  "game.lua": "game.md",
  "hotkeymanager.lua": "hotkeymanager.md",
  "hud.lua": "hud.md",
  "inventory.lua": "inventory.md",
  "json.lua": "json.md",
  "map.lua": "map.md",
  "npc.lua": "npc.md",
  "player.lua": "player.md",
  "sound.lua": "sounds.md",
  "spells.lua": "spells.md",
  "timer.lua": "timer.md"
};
const excluded = new Set(["CustomModalWindow:onButtonClick", "Game.executeEvents", "HUD:onClick"]);
const aliases = new Map([
  ["Container", "containerIndex"],
  ["Creature", "creatureId"],
  ["CustomModalWindow", "caption, description"],
  ["HUD", "x, y, value, newFeatures"],
  ["Timer", "name, timerFunction, timeDelay, autoStart"]
]);
const failures = [];

function functionsFromLua(text, file) {
  const result = [];
  const expression = /^\s*function\s+([A-Za-z_]\w*(?:[.:][A-Za-z_]\w*)+)\s*\(([^)]*)\)/gm;
  for (const match of text.matchAll(expression)) {
    if (!excluded.has(match[1])) {
      result.push([match[1], match[2].replace(/\s+/g, " ").trim()]);
    }
  }
  if (file === "timer.lua") {
    result.unshift(["destroyTimer", "name"]);
  }
  return result;
}

function firstApiBlock(markdown) {
  const block = markdown.match(/```lua\r?\n([\s\S]*?)```/);
  const result = new Map();
  if (!block) return result;
  const expression = /^\s*([A-Za-z_]\w*(?:[.:][A-Za-z_]\w*)*)\s*\(([^)]*)\)\s*$/gm;
  for (const match of block[1].matchAll(expression)) {
    result.set(match[1], match[2].replace(/\s+/g, " ").trim());
  }
  return result;
}

for (const [luaFile, markdownFile] of Object.entries(modules)) {
  const source = fs.readFileSync(path.join(coreDir, luaFile), "utf8");
  const expected = functionsFromLua(source, luaFile);
  for (const localeDir of [enDir, ptDir]) {
    const docPath = path.join(localeDir, markdownFile);
    const actual = firstApiBlock(fs.readFileSync(docPath, "utf8"));
    for (const [name, signature] of expected) {
      if (!actual.has(name)) {
        failures.push(`${path.relative(root, docPath)}: missing ${name}(${signature})`);
      } else if (actual.get(name) !== signature) {
        failures.push(`${path.relative(root, docPath)}: ${name} has (${actual.get(name)}), expected (${signature})`);
      }
    }
    for (const internalName of excluded) {
      if (actual.has(internalName)) {
        failures.push(`${path.relative(root, docPath)}: internal function ${internalName} is listed as public`);
      }
    }
    const allowed = new Map(expected);
    const moduleAlias = [...aliases].find(([name]) => markdownFile.startsWith(name === "CustomModalWindow" ? "custom_modal" : name.toLowerCase()));
    if (moduleAlias) allowed.set(...moduleAlias);
    for (const [name, signature] of actual) {
      if (!allowed.has(name)) {
        failures.push(`${path.relative(root, docPath)}: unexpected public API ${name}(${signature})`);
      }
    }
  }
}

function enumValues(text) {
  const values = new Map();
  let current = null;
  for (const line of text.replace(/\r\n/g, "\n").split("\n")) {
    const table = line.match(/^Enums\.([A-Za-z_]\w*)\s*=\s*\{/);
    if (table) {
      current = table[1];
      continue;
    }
    const assignment = line.match(/^Enums\.([A-Za-z_]\w*)\.([A-Za-z_]\w*)\s*=\s*(.+)$/);
    if (assignment) {
      values.set(`${assignment[1]}.${assignment[2]}`, assignment[3].replace(/\s*--.*$/, "").trim());
      continue;
    }
    if (current && /^\s*}/.test(line)) {
      current = null;
      continue;
    }
    if (current) {
      const field = line.match(/^\s*([A-Za-z_]\w*)\s*=\s*(.+)$/);
      if (field) {
        values.set(`${current}.${field[1]}`, field[2].replace(/\s*--.*$/, "").replace(/,\s*$/, "").trim());
      }
    }
  }
  return values;
}

function gameEventValues(text) {
  const block = text.match(/(?:^|\s)(?:Game\.)?Events\s*=\s*\{([\s\S]*?)\n\s*}/m);
  const values = new Map();
  if (!block) return values;
  for (const line of block[1].split(/\r?\n/)) {
    const field = line.match(/^\s*([A-Za-z_]\w*)\s*=\s*([^,\s]+)/);
    if (field) values.set(field[1], field[2]);
  }
  return values;
}

function compareMaps(expected, actual, label) {
  for (const [name, value] of expected) {
    if (!actual.has(name)) {
      failures.push(`${label}: missing ${name}`);
    } else if (actual.get(name) !== value) {
      failures.push(`${label}: ${name} is ${actual.get(name)}, expected ${value}`);
    }
  }
  for (const name of actual.keys()) {
    if (!expected.has(name)) {
      failures.push(`${label}: unexpected ${name}`);
    }
  }
}

const enumSource = fs.readFileSync(path.join(coreDir, "enums.lua"), "utf8");
const expectedEnums = enumValues(enumSource);
const gameSource = fs.readFileSync(path.join(coreDir, "game.lua"), "utf8");
const expectedEvents = gameEventValues(gameSource);
for (const localeDir of [enDir, ptDir]) {
  const enumPath = path.join(localeDir, "enums.md");
  compareMaps(expectedEnums, enumValues(fs.readFileSync(enumPath, "utf8")), path.relative(root, enumPath));
  const gamePath = path.join(localeDir, "game.md");
  compareMaps(expectedEvents, gameEventValues(fs.readFileSync(gamePath, "utf8")), path.relative(root, gamePath));

  const eventsPath = path.join(localeDir, "..", "game_events.md");
  const documentedEvents = new Set(
    [...fs.readFileSync(eventsPath, "utf8").matchAll(/\bGame\.Events\.([A-Za-z_]\w*)\b/g)]
      .map((match) => match[1])
  );
  for (const eventName of expectedEvents.keys()) {
    if (!documentedEvents.has(eventName)) {
      failures.push(`${path.relative(root, eventsPath)}: missing Game.Events.${eventName}`);
    }
  }
  for (const eventName of documentedEvents) {
    if (!expectedEvents.has(eventName)) {
      failures.push(`${path.relative(root, eventsPath)}: unknown Game.Events.${eventName}`);
    }
  }
}

function walkMarkdown(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkMarkdown(fullPath));
    } else if (/\.(?:md|mdx)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

const enFiles = walkMarkdown(docsDir);
const ptFiles = walkMarkdown(translationsDir);
const enRelative = new Set(enFiles.map((file) => path.relative(docsDir, file)));
const ptRelative = new Set(ptFiles.map((file) => path.relative(translationsDir, file)));
for (const file of enRelative) {
  if (!ptRelative.has(file)) failures.push(`missing Portuguese translation: ${file}`);
}
for (const file of ptRelative) {
  if (!enRelative.has(file)) failures.push(`orphan Portuguese translation: ${file}`);
}

const publicFunctions = new Set();
for (const luaFile of Object.keys(modules)) {
  const source = fs.readFileSync(path.join(coreDir, luaFile), "utf8");
  for (const [name] of functionsFromLua(source, luaFile)) publicFunctions.add(name);
}
for (const name of aliases.keys()) publicFunctions.add(name);

const enumTables = new Set([...expectedEnums.keys()].map((name) => name.split(".")[0]));
const publicModules = [...new Set([...publicFunctions]
  .filter((name) => name.includes(".") || name.includes(":"))
  .map((name) => name.split(/[.:]/)[0]))];
const modulePattern = publicModules.join("|");
const apiCall = new RegExp(`\\b(${modulePattern})([.:])([A-Za-z_]\\w*)\\s*\\(`, "g");
const apiDeclaration = new RegExp(`^\\s*function\\s+((${modulePattern})[.:][A-Za-z_]\\w*)(.*)$`);
const enumReference = /\bEnums\.([A-Za-z_]\w*)(?:\.([A-Za-z_]\w*))?/g;

for (const docPath of [...enFiles, ...ptFiles]) {
  const text = fs.readFileSync(docPath, "utf8");
  const label = path.relative(root, docPath);

  for (const match of text.matchAll(apiCall)) {
    const name = `${match[1]}${match[2]}${match[3]}`;
    if (!publicFunctions.has(name)) {
      failures.push(`${label}: unknown API reference ${name}`);
    }
  }

  for (const [index, line] of text.split(/\r?\n/).entries()) {
    const declaration = line.match(apiDeclaration);
    if (!declaration) continue;
    if (!/^\s*function\s+[A-Za-z_]\w*(?:[.:][A-Za-z_]\w*)+\s*\([^)]*\)\s*$/.test(line)) {
      failures.push(`${label}:${index + 1}: malformed API declaration`);
    } else if (!publicFunctions.has(declaration[1])) {
      failures.push(`${label}:${index + 1}: unknown API declaration ${declaration[1]}`);
    }
  }

  for (const match of text.matchAll(enumReference)) {
    const table = match[1];
    const value = match[2];
    if (!enumTables.has(table)) {
      failures.push(`${label}: unknown enum table Enums.${table}`);
    } else if (value && !expectedEnums.has(`${table}.${value}`)) {
      failures.push(`${label}: unknown enum value Enums.${table}.${value}`);
    }
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Lua API docs match ${Object.keys(modules).length} core modules in English and Portuguese.`);
