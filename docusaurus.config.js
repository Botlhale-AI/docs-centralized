// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs',
  tagline: 'Botlhale AI Docs',
  favicon: 'img/ficon.png',
  url: 'https://docs.botlhale.xyz',
  baseUrl: '/docs-centralized/',
  organizationName: 'Botlhale-AI', // Usually your GitHub org/user name.
  projectName: 'docs-centralized', // Usually your repo name.
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: 'gh-pages', 
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://docs.botlhale.xyz',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://docs.botlhale.xyz',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/ficon.png',
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'Logo',
          src: 'img/ficon.png',
        },
        items: [
          {href: 'https://botlhale.ai/botlhale-blog/', label: 'Blog', position: 'right'},
          {
            href: 'https://docs.botlhale.xyz',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            to: '/',
            href: '/',
            html: `
              <img
                src="/img/logo.png"
                alt="Botlhale AI Logo"
                class="navbar-logo-custom"
                style="height: 2rem; margin-right: 1rem; filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.75)); "
              >`,
          },
        ],
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
