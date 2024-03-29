// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ymatigoosa',
  tagline: 'Scala and software architecture',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ymatigoosa.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'io.github.ymatigoosa', // Usually your GitHub org/user name.
  projectName: 'ymatigoosa.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: '/project',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          routeBasePath: '/blog',
          blogTitle: 'Ymatigoosa | Blog',
          blogDescription: 'Personal blog',
          postsPerPage: 10,
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Ymatigoosa',
        logo: {
          alt: 'Ymatigoosa site logo',
          src: 'img/logo.svg',
          href: '/blog',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'projects',
          //   position: 'left',
          //   label: 'Projects',
          // },
          {
            href: 'https://github.com/Ymatigoosa/ymatigoosa.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Social',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Ymatigoosa',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/pahomovda/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dmitrii Pakhomov. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
