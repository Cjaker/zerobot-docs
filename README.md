# ZeroBot documentation

Private English and Portuguese documentation for ZeroBot, built with Docusaurus.

## Requirements

- Node.js 20 or newer
- The current ZeroBot Lua libraries under `Documents/ZeroBot/Scripts/core`

## Install

```powershell
npm install
```

## Local development

```powershell
npm start
```

The development server reloads the site when docs, components, or styles change.

## Validate

Point the checker to the installed core libraries and run the complete validation:

```powershell
$env:ZEROBOT_CORE_DIR = 'C:\Users\Nop\Documents\ZeroBot\Scripts\core'
npm run validate
```

This command:

1. compares the English and Portuguese Lua references with the public functions, enums, and events in `Scripts/core`;
2. checks translation-file parity and unknown API references;
3. tests function extraction and search ranking;
4. builds every configured locale and verifies that search results point to real pages and anchors.

Run only the API check with:

```powershell
npm run check:lua-api
```

## Production build

```powershell
npm run build
```

The generated static site is written to `build`, including the Portuguese site under `build/pt`.

Publishing is intentionally separate from the local build and validation workflow.

## Search

Search is local: each build indexes the current locale's docs, including Lua code
and the signatures in the first API block of each module reference. No Algolia
account, crawler, search server, or API key is needed. The index loads only when
search opens and ships as a versioned asset in `build/assets` (also `build/pt/assets`).
Upload the **complete contents** of the latest `build` directory when deploying by ZIP.

Open search from the navbar, with `Ctrl+K` / `Cmd+K`, or with `/` outside a text field.
Use complete function names (`Player.getHealth`), method names (`getHealth`), colon
syntax (`HUD:setText`), or words (`forge fuse`). Function matches rank ahead of prose;
results include signatures, descriptions, module names, and direct reference links.
The Lua API and Guides filters narrow the same index. Search stays within the active
language; switch the site language to search its translation.

Run the extraction/ranking regression tests separately with `npm run test:search`.
The build also checks every indexed anchor, so a broken search link fails the build.

Lua references are still authored as Markdown. The shared search/remark code adds
stable `lua-*` anchors and separates documented declarations into code blocks at
render time, preserving their comments and code without editing the API source.
