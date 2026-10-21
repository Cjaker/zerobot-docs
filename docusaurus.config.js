// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import remarkLuaAnchors from './plugins/lua-search/remark.mjs';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZeroBot',
  tagline: 'Documentation and Lua API reference for ZeroBot developers.',
  favicon: 'img/favicon.ico',

  url: 'https://docs.zerobot.net',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
        label: "English",
      },
      pt: {
        htmlLang: 'pt-BR',
        label: "Português"
      },
    },
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content: 'ZeroBot, Lua, LuaJIT, CaveBot, Tibia, OTServer, bot scripting',
        },
      ],
      // Replace with your project's social card
      image: 'img/zerobot-social-card.png',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'ZeroBot',
        logo: {
          alt: 'ZeroBot Logo',
          src: 'img/zerobot-logo.png',
        },
        items: [
          {
            to: '/general',
            label: 'Overview',
            position: 'left',
          },
          {
            to: '/cavebot/',
            label: 'CaveBot',
            position: 'left',
          },
          {
            to: '/lua_scripting/functions/',
            label: 'Lua API',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.vsDark,
        additionalLanguages: ['lua'],
      },
    }),
  plugins: ['./plugins/lua-search/index.cjs'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          remarkPlugins: [remarkLuaAnchors],
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ]
};

export default config;
