import assert from 'node:assert/strict';
import {test} from 'node:test';
import {readFile, readdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createProcessor} from '@mdx-js/mdx';
import gfm from 'remark-gfm';
import {createSlugger, DEFAULT_PARSE_FRONT_MATTER, parseMarkdownFile, parseMarkdownHeadingId} from '@docusaurus/utils';
import {addLuaAnchors, buildDocRecords, extractLuaFunctions, luaAnchor, nodeText} from '../plugins/lua-search/records.mjs';
import {normalize, prepareRecords, searchRecords} from '../src/search/rank.mjs';

const siteDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const fixture = [
  '# Game', '', 'An API reference.', '', '```lua',
  'Game.getHealth()', 'Game.getHealthPercent()', 'Game.forgeFuseItems(itemIdA, tierA, itemIdB, tierB, useConvergence)', '```', '',
  '## Code', '', '```lua', 'Game.Events = { TALK = 0 }', '',
  '--- Get current health.', '-- @return number', 'function Game.getHealth()', '',
  '--- Get health percentage.', 'function Game.getHealthPercent()', '',
  '--- Fuse eligible items.', '-- @return true or nil', 'function Game.forgeFuseItems(itemIdA, tierA, itemIdB, tierB, useConvergence)', '```', '',
  '## Example', '', '```lua', 'function privateHelper()', 'end', '```',
].join('\n');
const parse = (content, format = 'md') => createProcessor({format, remarkPlugins: [gfm]}).parse(content);
const doc = {id: 'lua_scripting/functions/game', title: 'Game', description: 'Game functions.', permalink: '/lua_scripting/functions/game/'};
const recordOptions = () => ({slugger: createSlugger(), parseHeadingId: parseMarkdownHeadingId});
const records = prepareRecords([
  ...buildDocRecords(parse(fixture), doc, recordOptions()),
  {kind: 'section', title: 'Forge guide', pageTitle: 'Overview', module: '', api: false, url: '/general#forge', text: 'How to fuse items.', description: 'Forge guide.'},
]);

test('extracts exact signatures and comment previews, not example helpers', () => {
  const entries = extractLuaFunctions(parse(fixture));
  assert.equal(entries.length, 3);
  assert.equal(entries[0].description, 'Get current health.');
  assert.ok(entries[0].commentText.includes('@return number'));
  assert.equal(entries[2].signature, 'Game.forgeFuseItems(itemIdA, tierA, itemIdB, tierB, useConvergence)');
  assert.ok(entries.every((entry) => entry.declaration));
});

test('anchors separate declarations without losing code or comments', () => {
  const root = parse(fixture);
  const codeValues = (node) => node.type === 'code' ? [node.value] : (node.children ?? []).flatMap(codeValues);
  const before = codeValues(root).join('\n');
  const entries = addLuaAnchors(root);
  assert.equal(codeValues(root).join('\n'), before);
  const ids = root.children.filter((node) => node.type === 'mdxJsxFlowElement').map((node) => node.attributes[0].value);
  assert.deepEqual(ids, entries.map((entry) => entry.anchor));
  assert.notEqual(luaAnchor('HUD.new'), luaAnchor('HUD:new'));
});

test('constructor and colon-method indexes get fallback anchors', () => {
  const root = parse('# HUD\n\n```lua\nHUD(x, y, value)\nHUD.new(x, y, value)\nHUD:setText(text)\n```');
  const entries = addLuaAnchors(root);
  assert.deepEqual(entries.map((entry) => entry.name), ['HUD', 'HUD.new', 'HUD:setText']);
  assert.equal(root.children.filter((node) => node.type === 'mdxJsxFlowElement').length, 3);
});

test('table and bullet methods use descriptive, valid HTML targets', () => {
  const root = parse('# HUD\n\n```lua\nHUD:getId()\nHUD:setText(text)\nHUD:hide()\nHUD:show()\n```\n\n| Method | Behavior |\n| --- | --- |\n| `getId()` | Returns the internal HUD ID. |\n| `hide()` / `show()` | Changes visibility. |\n\n- `setText(text)` changes the displayed text.');
  const entries = extractLuaFunctions(root);
  assert.equal(entries[0].node.type, 'tableRow');
  assert.equal(entries[0].description, 'Returns the internal HUD ID.');
  assert.equal(entries[1].node.type, 'listItem');
  assert.equal(entries[1].description, 'changes the displayed text.');
  addLuaAnchors(root);
  const table = root.children.find((node) => node.type === 'table');
  assert.equal(table.children[1].data.hProperties.id, luaAnchor('HUD:getId'));
  assert.equal(table.children[2].data.hProperties.id, luaAnchor('HUD:hide'));
  assert.equal(table.children[2].children[0].children[0].name, 'span');
});

test('ranks an exact function ahead of longer names and prose', () => {
  assert.equal(searchRecords(records, 'Game.getHealth').results[0].title, 'Game.getHealth');
  assert.equal(searchRecords(records, 'getHealth').results[0].title, 'Game.getHealth');
  assert.equal(searchRecords(records, 'GAME.GETHEALTH()').results[0].title, 'Game.getHealth');
});

test('supports camelCase, partial names, words, and pasted calls', () => {
  for (const query of ['forge fuse', 'forgeFuse', 'Game.forgeFuseItems(1, 0, 2, 0, false)']) {
    assert.equal(searchRecords(records, query).results[0].title, 'Game.forgeFuseItems', query);
  }
});

test('tolerates small function-name typos without crossing modules', () => {
  assert.equal(searchRecords(records, 'getHeath').results[0].title, 'Game.getHealth');
  assert.equal(searchRecords(records, 'Game.getHeath').results[0].title, 'Game.getHealth');
  assert.equal(searchRecords(records, 'Player.getHeath').total, 0);
});

test('filters API/guides and deduplicates feature references', () => {
  assert.ok(searchRecords(records, 'forge', 'api').results.every((entry) => entry.api));
  assert.equal(searchRecords(records, 'forge', 'guides').results[0].url, '/general#forge');
  const duplicated = [...records, {...records.find((entry) => entry.kind === 'function'), url: '/another-reference/'}];
  assert.equal(searchRecords(duplicated, 'Game.getHealth').results.filter((entry) => entry.title === 'Game.getHealth').length, 1);
});

test('handles empty/no-match queries and Portuguese accents', () => {
  assert.deepEqual(searchRecords(records, '  '), {results: [], total: 0});
  assert.equal(searchRecords(records, 'zzzzzzzzzzzzzz').total, 0);
  assert.equal(normalize('Ação do Jogador'), 'acao do jogador');
});

test('uses real Docusaurus heading slugs, including explicit and duplicate IDs', () => {
  const root = parse('# Reference\n\n## Use **items**\n\nText.\n\n## Use **items**\n\nMore.\n\n## Special {#special-id}\n\nNotes.');
  const sections = buildDocRecords(root, {...doc, id: 'general/reference'}, recordOptions()).filter((entry) => entry.kind === 'section');
  assert.deepEqual(sections.map((entry) => entry.url.split('#')[1]), ['use-items', 'use-items-1', 'special-id']);
});

const languages = {};
for (const locale of ['en', 'pt']) {
  const directory = path.join(siteDir, locale === 'en' ? 'docs' : 'i18n/pt/docusaurus-plugin-content-docs/current', 'lua_scripting/functions');
  const all = [];
  const names = [];
  for (const file of (await readdir(directory)).filter((name) => name.endsWith('.md')).sort()) {
    const source = path.join(directory, file);
    const parsed = await parseMarkdownFile({filePath: source, fileContent: await readFile(source, 'utf8'), parseFrontMatter: DEFAULT_PARSE_FRONT_MATTER});
    const root = parse(parsed.content);
    const entries = extractLuaFunctions(root);
    names.push(...entries.map((entry) => entry.signature));
    const title = nodeText(root.children.find((node) => node.type === 'heading'));
    const id = `lua_scripting/functions/${file.replace(/\.md$/, '')}`;
    all.push(...buildDocRecords(root, {id, title, description: title, permalink: `${locale === 'pt' ? '/pt' : ''}/${id}/`}, recordOptions()));
    addLuaAnchors(root);
    const ids = [];
    function walk(node) {
      if (node.type === 'mdxJsxFlowElement') ids.push(node.attributes.find((attribute) => attribute.name === 'id')?.value);
      if (node.type === 'mdxJsxTextElement') ids.push(node.attributes.find((attribute) => attribute.name === 'id')?.value);
      if (node.data?.hProperties?.id) ids.push(node.data.hProperties.id);
      for (const child of node.children ?? []) walk(child);
    }
    walk(root);
    assert.equal(new Set(ids).size, ids.length, `Duplicate anchors in ${locale}/${file}`);
    for (const entry of entries) assert.ok(ids.includes(entry.anchor), `Missing anchor for ${entry.name}`);
  }
  languages[locale] = {records: prepareRecords(all), signatures: [...new Set(names)].sort()};
}

test('English and Portuguese index the same published function signatures', () => {
  assert.deepEqual(languages.en.signatures, languages.pt.signatures);
  assert.ok(languages.en.signatures.length > 300);
});

for (const locale of ['en', 'pt']) {
  test(`${locale}: actual docs find current functions and keep locale URLs`, () => {
    for (const name of ['Game.forgeFuseItems', 'Game.unlockTaskBoardPreferenceSlot', 'Player.getBountyPoints', 'Player.getSoulSeals', 'HUD:setText', 'Timer', 'JSON.decode']) {
      const result = searchRecords(languages[locale].records, name).results[0];
      assert.equal(result?.title, name);
      assert.ok(result.url.endsWith(`#${luaAnchor(name)}`));
      assert.equal(result.url.startsWith('/pt/'), locale === 'pt');
    }
    assert.ok(searchRecords(languages[locale].records, 'TASK_BOARD_DATA').total > 0);
    const tasks = searchRecords(languages[locale].records, 'Game.unlockTaskBoardPreferenceSlot').results[0];
    assert.ok(tasks.url.includes('/hunting_tasks/'), 'Prefer the specific, descriptive feature reference');
    assert.notEqual(searchRecords(languages[locale].records, 'HUD:setText').results[0].description, 'HUD');
  });
}
