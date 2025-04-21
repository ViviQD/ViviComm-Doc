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
  onBrokenMarkdownLinks: 'warn',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ViviComm Lite Atlas',
      logo: {
        alt: 'ViviQD Logo',
        src: 'img/viviqd-logo.svg',
      },
      items: [
        {
          //type: 'docSidebar',
          //sidebarId: 'tutorialSidebar',
          to: 'docs/intro',
          position: 'left',
          label: 'Tutorial',
        },
        {
          to: 'versioned_docs',  // versions site
          label: 'Versions',
          position: 'left',
        }, 
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
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
              label: 'lnk.bio',
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
