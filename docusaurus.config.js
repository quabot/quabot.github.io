// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "QuaBot Wiki",
  tagline: "View all documentation related to QuaBot here!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://wiki.quabot.net",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "quabot", // Usually your GitHub org/user name.
  projectName: "quabot.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  headTags: [
    {
      tagName: "script",
      innerHTML: "",
      attributes: {
        id: "google-analytics",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "theme-color",
        content: "#416683",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "accent-color",
        content: "#416683",
      },
    },
    {
      tagName: "script",
      attributes: {
        async: "true",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4961763445419391",
        crossorigin: "anonymous",
      },
    },
  ],

  scripts: [
    {
      src: "/js/imageHandler.js",
      async: false,
    },
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-GS780BQLMF",
      async: true,
    },
    {
      src: "/js/ga.js",
      async: false,
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/quabot/quabot.github.io/tree/main",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themes: [
    [
      //@ts-ignore
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions}*/
      //@ts-ignore
      ({
        hashed: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "QuaBot Wiki",
        logo: {
          alt: "quabot",
          style: { margin: 0 },
          src: "img/logo.png",
        },
        items: [
          {
            to: "/docs",
            label: "Docs",
            position: "left",
          },
          {
            to: "/blog",
            label: "Releases",
            position: "left",
          },
          {
            to: "https://quabot.net",
            label: "Website",
            position: "left",
          },
          {
            to: "https://invite.quabot.net",
            label: "Invite",
            position: "left",
          },
          {
            to: "https://quabot.net/support",
            label: "Support",
            position: "left",
          },
        ],
      },
    }),
};

module.exports = config;
