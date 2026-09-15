// Shared by indexing and rendering: a search URL must use the same anchor as MDX.
const callPattern = /^\s*([A-Za-z_]\w*(?:[.:][A-Za-z_]\w*)*)\s*\(([^)]*)\)\s*(?:--.*)?$/;
const declarationPattern = /^\s*function\s+([A-Za-z_]\w*(?:[.:][A-Za-z_]\w*)*)\s*\(([^)]*)\)/;

export function nodeText(node) {
  if (['mdxjsEsm', 'mdxFlowExpression', 'mdxTextExpression', 'html'].includes(node.type)) return '';
  if (typeof node.value === 'string') return node.value;
  const inline = ['heading', 'paragraph', 'emphasis', 'strong', 'link', 'delete'].includes(node.type);
  return (node.children ?? []).map(nodeText).join(inline ? '' : ' ');
}

export function compactText(text) {
  return text.replace(/\s+/g, ' ').trim();
}

export function luaAnchor(name) {
  // Encode punctuation rather than collapsing . and : into duplicate IDs.
  return `lua-${name.replaceAll('.', '-dot-').replaceAll(':', '-colon-').toLowerCase()}`;
}

function codeNodes(root) {
  const nodes = [];
  function walk(node) {
    if (node.type === 'code' && node.lang === 'lua') nodes.push(node);
    for (const child of node.children ?? []) walk(child);
  }
  walk(root);
  return nodes;
}

export function extractLuaFunctions(root) {
  const blocks = codeNodes(root);
  const first = blocks[0];
  if (!first) return [];
  const functions = new Map();
  for (const line of first.value.split('\n')) {
    const match = callPattern.exec(line);
    if (!match) continue;
    const [, name, params] = match;
    if (!functions.has(name)) {
      functions.set(name, {name, signature: `${name}(${params})`, anchor: luaAnchor(name), node: first, start: 0, declaration: false, description: '', priority: 0});
    }
  }
  for (const node of blocks) {
    const lines = node.value.split('\n');
    for (let line = 0; line < lines.length; line++) {
      const match = declarationPattern.exec(lines[line]);
      if (!match || !functions.has(match[1])) continue;
      const entry = functions.get(match[1]);
      if (entry.declaration) continue;
      let start = line;
      while (start > 0 && /^\s*--/.test(lines[start - 1])) start--;
      const comments = lines.slice(start, line).map((value) => value.replace(/^\s*--+\s?/, ''));
      // Hide implementation-only wrapper prose in the preview, not in indexed text.
      const description = comments.filter((value) => !value.startsWith('@') && !/wrapper around|wrapper da|wrapper para/i.test(value)).join(' ');
      Object.assign(entry, {node, start, declaration: true, description: compactText(description), commentText: compactText(comments.join(' ')), priority: 10});
    }
  }
  function findReferences(node) {
    let scope;
    let priority = 0;
    if (node.type === 'tableRow') {scope = node.children[0]; priority = 4;}
    if (node.type === 'listItem') {scope = node.children[0]; priority = 3;}
    if (node.type === 'paragraph' && node.children[0]?.type === 'inlineCode') {scope = node; priority = 2;}
    if (node.type === 'heading') {scope = node; priority = 5;}
    if (scope) {
      for (const code of (scope.children ?? []).filter((child) => child.type === 'inlineCode')) {
        const match = callPattern.exec(code.value);
        if (!match) continue;
        const name = match[1];
        const candidates = [...functions.values()].filter((entry) => entry.name === name || (!/[.:]/.test(name) && entry.name.split(/[.:]/).at(-1) === name));
        if (candidates.length !== 1 || candidates[0].priority >= priority) continue;
        const description = node.type === 'tableRow' ? node.children.slice(1).map(nodeText).join(' ')
          : node.type === 'heading' ? '' : nodeText(scope).replace(code.value, '').trim();
        Object.assign(candidates[0], {node, description: compactText(description), priority});
      }
    }
    for (const child of node.children ?? []) findReferences(child);
  }
  findReferences(root);
  return [...functions.values()];
}

function anchorNode(id, children = []) {
  return {
    type: 'mdxJsxFlowElement', name: 'div',
    attributes: [
      {type: 'mdxJsxAttribute', name: 'id', value: id},
      {type: 'mdxJsxAttribute', name: 'className', value: 'lua-function-reference'},
    ], children,
  };
}

export function addLuaAnchors(root) {
  const entries = extractLuaFunctions(root);
  const byNode = new Map();
  for (const entry of entries) {
    if (!byNode.has(entry.node)) byNode.set(entry.node, []);
    byNode.get(entry.node).push(entry);
  }
  function transform(parent) {
    parent.children = parent.children.flatMap((node) => {
      const functions = byNode.get(node);
      if (!functions) {
        if (node.children) transform(node);
        return [node];
      }
      if (node.type !== 'code') {
        // Preserve existing heading IDs/TOC links. Tables and lists accept IDs
        // directly; wrapping tr/li in a div would produce invalid HTML.
        if (node.type === 'heading') return [...functions.map((entry) => anchorNode(entry.anchor)), node];
        const properties = ((node.data ??= {}).hProperties ??= {});
        properties.id = functions[0].anchor;
        properties.className = 'lua-function-reference';
        const textParent = node.type === 'paragraph' ? node : node.children[0];
        for (const entry of functions.slice(1)) {
          textParent.children.unshift({...anchorNode(entry.anchor), type: 'mdxJsxTextElement', name: 'span'});
        }
        return [node];
      }
      const fallback = functions.filter((entry) => !entry.declaration).map((entry) => anchorNode(entry.anchor));
      const declarations = functions.filter((entry) => entry.declaration).sort((a, b) => a.start - b.start);
      if (!declarations.length) return [...fallback, node];
      const lines = node.value.split('\n');
      const result = [...fallback];
      const before = lines.slice(0, declarations[0].start).join('\n');
      if (before.trim()) result.push({...node, value: before});
      declarations.forEach((entry, index) => {
        const end = declarations[index + 1]?.start ?? lines.length;
        result.push(anchorNode(entry.anchor, [{...node, value: lines.slice(entry.start, end).join('\n')}]));
      });
      return result;
    });
  }
  transform(root);
  return entries;
}

export function buildDocRecords(root, doc, {slugger, parseHeadingId, maintainCase = false}) {
  const sections = [];
  let current;
  for (const node of root.children) {
    if (node.type === 'heading') {
      const parsed = parseHeadingId(nodeText(node), 'classic');
      const id = parsed.id ?? slugger.slug(parsed.text, {maintainCase});
      current = {title: parsed.text, id, depth: node.depth, heading: node, nodes: []};
      sections.push(current);
    } else {
      if (!current) {
        current = {title: doc.title, id: '', depth: 1, nodes: []};
        sections.push(current);
      }
      current.nodes.push(node);
    }
  }
  const pageText = compactText(root.children.map(nodeText).join(' '));
  const base = {pageTitle: doc.title, module: doc.id.startsWith('lua_scripting/functions/') ? doc.title : '', api: doc.id.startsWith('lua_scripting/'), description: doc.description};
  const records = [{...base, kind: 'page', title: doc.title, url: doc.permalink, text: pageText.slice(0, 12000)}];
  for (const section of sections.filter((item) => item.depth > 1)) {
    const text = compactText(section.nodes.map(nodeText).join(' '));
    records.push({...base, kind: 'section', title: section.title, url: `${doc.permalink}#${section.id}`, text: text.slice(0, 12000), description: text.slice(0, 240)});
  }
  if (doc.id.startsWith('lua_scripting/functions/')) {
    for (const entry of extractLuaFunctions(root)) {
      const section = sections.find((item) => item.heading === entry.node || item.nodes.includes(entry.node));
      const context = compactText((section?.nodes ?? []).filter((node) => node.type !== 'code').map(nodeText).join(' '));
      records.push({...base, kind: 'function', title: entry.name, signature: entry.signature, module: entry.name.split(/[.:]/)[0], url: `${doc.permalink}#${entry.anchor}`, detailed: entry.priority > 0, text: entry.commentText || entry.description || context || doc.description, description: entry.description || context.slice(0, 240) || doc.description});
    }
  }
  return records;
}
