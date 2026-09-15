const path = require('node:path');
const {readFile} = require('node:fs/promises');
const {createSlugger, DEFAULT_PARSE_FRONT_MATTER, parseMarkdownFile, parseMarkdownHeadingId, readOutputHTMLFile} = require('@docusaurus/utils');

module.exports = async function luaSearch(context) {
  // CommonJS entry point keeps native ESM imports out of jiti's config transform.
  const {createProcessor} = await import('@mdx-js/mdx');
  const {default: gfm} = await import('remark-gfm');
  const {buildDocRecords} = await import('./records.mjs');
  let index;
  const dataFile = path.join(context.generatedFilesDir, 'zerobot-local-search', 'default', 'index.json');
  return {
    name: 'zerobot-local-search',
    async allContentLoaded({allContent, actions}) {
      const docsContent = allContent['docusaurus-plugin-content-docs'] ?? {};
      const records = [];
      for (const content of Object.values(docsContent)) {
        for (const version of content.loadedVersions ?? []) {
          for (const doc of [...version.docs].sort((a, b) => a.permalink.localeCompare(b.permalink))) {
            if (doc.draft || doc.unlisted) continue;
            const source = path.resolve(context.siteDir, doc.source.replace(/^@site\//, ''));
            const fileContent = await readFile(source, 'utf8');
            const parsed = await parseMarkdownFile({filePath: source, fileContent, parseFrontMatter: DEFAULT_PARSE_FRONT_MATTER});
            const root = createProcessor({format: source.endsWith('.mdx') ? 'mdx' : 'md', remarkPlugins: [gfm]}).parse(parsed.content);
            records.push(...buildDocRecords(root, doc, {slugger: createSlugger(), parseHeadingId: parseMarkdownHeadingId, maintainCase: context.siteConfig.markdown.anchors.maintainCase}));
          }
        }
      }
      if (!records.some((record) => record.kind === 'function')) throw new Error('Local search did not index any Lua functions.');
      index = {locale: context.i18n.currentLocale, records};
      await actions.createData('index.json', JSON.stringify(index));
    },
    configureWebpack() {
      return {resolve: {alias: {'@zerobot-search-index': dataFile}}};
    },
    async postBuild({outDir, siteConfig}) {
      // Check the actual rendered HTML, not a guessed Markdown-to-URL mapping.
      const pages = new Map();
      for (const record of index.records) {
        const url = new URL(record.url, siteConfig.url);
        const permalink = url.pathname.slice(context.baseUrl.length).replace(/^\/?/, '/');
        if (!pages.has(permalink)) {
          pages.set(permalink, (await readOutputHTMLFile(permalink, outDir, siteConfig.trailingSlash)).toString('utf8'));
        }
        const anchor = decodeURIComponent(url.hash.slice(1));
        if (anchor && !pages.get(permalink).includes(`id="${anchor}"`)) {
          throw new Error(`Search result has no rendered anchor: ${record.url}`);
        }
      }
      console.log(`[local-search] ${index.locale}: ${index.records.filter((record) => record.kind === 'function').length} function references; ${index.records.length} results with verified links.`);
    },
  };
};
