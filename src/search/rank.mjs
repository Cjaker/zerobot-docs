export function normalize(text) {
  return text.replace(/([a-z\d])([A-Z])/g, '$1 $2').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z\d]+/g, ' ').trim();
}

const compact = (text) => normalize(text).replaceAll(' ', '');

export function prepareRecords(records) {
  return records.map((record) => ({...record,
    name: compact(record.title), shortName: compact(record.title.split(/[.:]/).at(-1)),
    titleWords: normalize(record.title), body: normalize(`${record.signature ?? ''} ${record.module} ${record.pageTitle} ${record.text}`),
  }));
}

function editDistance(a, b) {
  if (Math.abs(a.length - b.length) > 2) return 3;
  let previous = Array.from({length: b.length + 1}, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const next = [i];
    for (let j = 1; j <= b.length; j++) next[j] = Math.min(next[j - 1] + 1, previous[j] + 1, previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    if (Math.min(...next) > 2) return 3;
    previous = next;
  }
  return previous[b.length];
}

export function searchRecords(records, query, filter = 'all', limit = 30) {
  // Accept a pasted call/signature without treating argument values as search terms.
  const trimmed = query.trim().slice(0, 200).replace(/^([A-Za-z_]\w*(?:[.:]\w+)*)(\s*\([\s\S]*)$/, '$1');
  const words = normalize(trimmed).split(' ').filter(Boolean);
  const needle = compact(trimmed);
  const shortNeedle = compact(trimmed.split(/[.:]/).at(-1));
  const moduleNeedle = /[.:]/.test(trimmed) ? compact(trimmed.split(/[.:]/)[0]) : '';
  if (!needle) return {results: [], total: 0};
  const matches = [];
  for (const record of records) {
    if (filter === 'api' && !record.api) continue;
    if (filter === 'guides' && record.api) continue;
    let score = 0;
    if (record.kind === 'function') {
      if (record.name === needle) score = 1200;
      else if (record.shortName === needle) score = 1150;
      else if (record.name.startsWith(needle)) score = 1000;
      else if (record.shortName.startsWith(needle)) score = 950;
      else if (record.name.includes(needle)) score = 850;
      else if (words.every((word) => record.titleWords.includes(word))) score = 800;
      else if (shortNeedle.length >= 5 && (!moduleNeedle || compact(record.module) === moduleNeedle) && editDistance(shortNeedle, record.shortName) <= (shortNeedle.length >= 9 ? 2 : 1)) score = 700;
    } else {
      if (record.name === needle) score = 650;
      else if (record.name.includes(needle)) score = 600;
      else if (words.every((word) => record.titleWords.includes(word))) score = 550;
    }
    if (!score && words.every((word) => record.body.includes(word))) {
      score = record.kind === 'function' ? 220 : record.kind === 'page' ? 200 : /^(code|codigo|enum|enums)$/.test(record.name) ? 180 : 250;
    }
    if (score && record.kind === 'function' && record.detailed) score += 5;
    if (score) matches.push({...record, score});
  }
  matches.sort((a, b) => b.score - a.score || a.title.length - b.title.length || a.title.localeCompare(b.title) || a.url.localeCompare(b.url));
  // Game and the feature-specific reference may both document the same function.
  const seen = new Set();
  const unique = matches.filter((record) => {
    const key = record.kind === 'function' ? record.title : record.url;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  return {results: unique.slice(0, limit), total: unique.length};
}
