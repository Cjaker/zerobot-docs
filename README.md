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
3. builds every configured locale and fails on broken routes or invalid MDX.

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
