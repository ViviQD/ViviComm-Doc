import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ViviComm Lite Atlas',
  tagline: 'ViviComm Medical AI Chatbot for kids.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://viviqd.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ViviComm-Lite-Atlas/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ViviQD', // Usually your GitHub org/user name.
  projectName: 'ViviComm-Lite-Atlas', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ViviQD/ViviComm-Lite-Atlas',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ViviQD/ViviComm-Lite-Atlas',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

/*   // Itt beállíthatod a verziózott dokumentációkat
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'versionedDocs', // Azonosító a verziózott dokumentációkhoz
        path: 'docs/versionedDocs', // A verziózott dokumentációk mappája
        routeBasePath: 'docs', // A dokumentációk útvonala
        sidebarPath: require.resolve('./sidebars.ts'), // A sidebar fájl
        editUrl: 'https://github.com/my-project/my-project/edit/main/',
      },
    ],
  ], */ 

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ViviComm Lite Atlas',
      logo: {
        alt: 'ViviQD Logo',
        src: 'img/fulllogo_transparent_nobuffer_nameOnly.png',
      },
      items: [
        // Tutorials menu
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ViviQD/ViviComm-Lite-Atlas',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              to: '/docs/legal/adult',
            },
            {
              label: 'Cookie Management',
              to: '/docs/legal/adult/cookie-policy',
            },
            {
              label: 'Legal Notice',
              to: '/docs/legal/adult/impressum',
            },
          ],
        },
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/tutorial',
            },
            {
              label: 'Software Documentation',
              to: '/docs/software',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Website',
              href: 'https://www.viviqd.com',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/4NC3V5BE',
            },
            {
              label: 'X',
              href: 'https://x.com/viviqdai',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/viviqd/',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/30262572/viviqd',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/viviqd',
            },
            {
              label: 'Youtube',
              href: 'https://x.com/docusaurus',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/viviqdai/',
            },
            {
              label: 'TikTok',
              href: 'https://www.tiktok.com/@viviqd_ai',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/user/ViviQD/',
            },
            {
              label: 'Threads',
              href: 'https://www.threads.net/@viviqdai',
            },
            {
              label: 'Twitch',
              href: 'https://www.twitch.tv/viviqd',
            },
            {
              label: 'Pinterest',
              href: 'https://hu.pinterest.com/viviqd_ai/',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/user/ViviQD/',
            },
            {
              label: 'Quora',
              href: 'https://www.quora.com/profile/ViviQD',
            },
            {
              label: 'Udemy',
              href: 'https://www.udemy.com/user/univital/',
            },
            {
              label: 'Lnk.Bio',
              href: 'https://lnk.bio/viviqd',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            { 
              label: 'ViviQD GitHub',
              href: 'https://github.com/ViviQD',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ViviQD. All rights reserved. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: 'forest', // A Mermaid theme (eg. 'forest', 'dark', 'default')
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
