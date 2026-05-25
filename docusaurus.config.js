// @ts-check

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Onset VoIP Plugin',
  tagline: 'Documentation for the Onset VoIP Unreal Engine plugin.',

  url: 'https://bluemountainsio.github.io',
  baseUrl: '/OnsetVoipDocs/',

  organizationName: 'BlueMountainsIO',
  projectName: 'OnsetVoipDocs',

  onBrokenLinks: 'throw',
  onDuplicateRoutes: 'throw',
  trailingSlash: false,

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Onset VoIP Plugin',
        logo: {
          alt: 'Onset VoIP logo',
          src: 'img/onset.png',
        },
        items: [
          {
            to: '/',
            label: 'Features',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/docs/changelog',
            label: 'Changelog',
            position: 'left',
          },
          {
            href: 'https://github.com/BlueMountainsIO/VoiceExample',
            label: 'Example Project',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Features',
                to: '/',
              },
              {
                label: 'Plugin Setup',
                to: '/docs/setup/',
              },
              {
                label: 'Troubleshooting',
                to: '/docs/troubleshooting',
              },
            ],
          },
          {
            title: 'Reference',
            items: [
              {
                label: 'Voice Example',
                href: 'https://github.com/BlueMountainsIO/VoiceExample',
              },
            ],
          },
        ],
        copyright: `Copyright 2026 Blue Mountains`,
      },
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
    }),
};

module.exports = config;
