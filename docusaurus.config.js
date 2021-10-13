require("ts-node").register();
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const remarkBreaks = require("remark-breaks");
const { pageRef } = require("./src/remark/pageRef");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import("@docusaurus/types").DocusaurusConfig} */
(
  module.exports = {
    title: "TypeScript入門『サバイバルTypeScript』",
    tagline: "Dinosaurs are cool",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "yytypescript", // Usually your GitHub org/user name.
    projectName: "book", // Usually your repo name.

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import("@docusaurus/preset-classic").Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl: "https://github.com/yytypescript/book/edit/master/",
            routeBasePath: "/",
            remarkPlugins: [remarkBreaks, pageRef],
          },
          // blog: {
          //   showReadingTime: true,
          //   // Please change this to your repo.
          //   editUrl:
          //     'https://github.com/facebook/docusaurus/edit/main/website/blog/',
          // },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
      ({
        navbar: {
          title: "サバイバルTypeScript",
          logo: {
            alt: "My Site Logo",
            src: "img/logo.svg",
          },
          items: [
            // {
            //   type: 'doc',
            //   docId: 'intro',
            //   position: 'left',
            //   label: 'Tutorial',
            // },
            // {to: '/blog', label: 'Blog', position: 'left'},
            // {
            //   href: 'https://github.com/facebook/docusaurus',
            //   label: 'GitHub',
            //   position: 'right',
            // },
          ],
        },
        footer: {
          style: "dark",
          links: [
            // {
            //   title: "Docs",
            //   items: [
            //     {
            //       label: "Tutorial",
            //       to: "/docs/intro",
            //     },
            //   ],
            // },
            {
              title: "Community",
              items: [
                {
                  label: "Stack Overflow",
                  href: "https://stackoverflow.com/questions/tagged/docusaurus",
                },
                {
                  label: "Discord",
                  href: "https://discordapp.com/invite/docusaurus",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/docusaurus",
                },
              ],
            },
            {
              title: "More",
              items: [
                // {
                //   label: "Blog",
                //   to: "/blog",
                // },
                {
                  label: "GitHub",
                  href: "https://github.com/facebook/docusaurus",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ["java", "php"],
        },
      }),
    i18n: {
      defaultLocale: "ja",
      locales: ["ja"],
    },
    plugins: [
      // [require.resolve("docusaurus-lunr-search"), { languages: ["ja", "ja"] }],
      [
        require.resolve("@cmfcmf/docusaurus-search-local"),
        {
          // whether to index docs pages
          indexDocs: true,
          // must start with "/" and correspond to the routeBasePath configured for the docs plugin
          // use "/" if you use docs-only-mode
          // (see https://v2.docusaurus.io/docs/2.0.0-alpha.70/docs-introduction#docs-only-mode)
          docsRouteBasePath: "/",

          // Whether to also index the titles of the parent categories in the sidebar of a doc page.
          // 0 disables this feature.
          // 1 indexes the direct parent category in the sidebar of a doc page
          // 2 indexes up to two nested parent categories of a doc page
          // 3...
          //
          // Do _not_ use Infinity, the value must be a JSON-serializable integer.
          indexDocSidebarParentCategories: 2,
          language: "ja",
        },
      ],
    ],
  }
);
