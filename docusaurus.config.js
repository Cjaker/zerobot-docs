// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZeroBot',
  tagline: 'ZeroBot is a bot developed for Tibia private servers.',
  favicon: 'img/favicon.ico',
  clientModules: [
    require.resolve("./src/client/announcementHeight.js"),
    require.resolve("./src/client/abResetOnLoad.js"),
  ],

  // Set the production url of your site here
  url: 'https://docs.zerobot.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
        label: "English",
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      pt: {
        htmlLang: 'pt-BR',
        label: "Português"
      },
    },
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/zerobot-social-card.png',
      colorMode: {
        defaultMode: "dark",
      },
      announcementBar: {
        id: 'help-update-docs-v2',
        content: `
    <span class="ab-msg ab-en">
      Want to help update the docs and earn license days?<br/>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/Cjaker/zerobot-docs">
        Open a PR on GitHub.
      </a>
      <br/>Any content based on our libs is welcome! You can find them in Documents/ZeroBot/Scripts/core directory.
    </span>

    <span class="ab-msg ab-pt">
      Quer ajudar a atualizar a documentação e ganhar dias de licença?<br/>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/Cjaker/zerobot-docs">
        Abra um PR no GitHub.
      </a>
      <br/>Qualquer conteúdo baseado em nossas libs é bem-vindo! Você pode encontrá-las na pasta Documents/ZeroBot/Scripts/core.
    </span>
  `,
        isCloseable: true,
      },
      navbar: {
        title: 'ZeroBot',
        logo: {
          alt: 'ZeroBot Logo',
          src: 'img/zerobot-logo.png',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'left',
          },
        ],
      },
      prism: {
        theme: prismThemes.vsDark,
        additionalLanguages: ['lua'],
      },
    }),
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
};

export default config;
