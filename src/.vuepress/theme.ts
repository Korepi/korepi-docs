import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar, ruNavbar, idNavbar, esNavbar, viNavbar, ptNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar, ruSidebar, idSidebar, esSidebar, viSidebar, ptSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://korepi.com/",

  author: {
    name: "Micah",
    url: "https://github.com/micah123321/",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.svg",

  repo: "Korepi/korepi-docs",

  docsDir: "src",

  locales: {
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Provides the best gaming experience for PC players in Genshin Impact.",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    "/ru/": {
      // navbar
      navbar: ruNavbar,

      // sidebar
      sidebar: ruSidebar,

      footer: "Обеспечивает лучший игровой опыт для игроков на ПК в Genshin Impact",

      displayFooter: true,

      metaLocales: {
        editLink: "Изменить эту страницу на GitHub",
      },
    },

    "/id/": {
      // navbar
      navbar: idNavbar,

      // sidebar
      sidebar: idSidebar,

      footer: "Memberikan pengalaman bermain game terbaik untuk pemain PC di Genshin Impact.",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit halaman ini di GitHub",
      },
    },
    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,
      footer: "为原神 PC 端玩家带来最好的游戏体验",
      displayFooter: true,
      navbarLocales: {
        /**
         * 语言下拉列表的无障碍标签
         */
        selectLangAriaLabel: "简体中文",

        /**
         * 当前语言的名称
         */
        langName: "简体中文",
      },
      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
    "/es/": {
      // navbar
      navbar: esNavbar,

      // sidebar
      sidebar: esSidebar,

      footer: "Proporciona la mejor experiencia de juego para jugadores de PC en Genshin Impact.",

      displayFooter: true,

      metaLocales: {
        editLink: "Edita esta pagina en GitHub",
      },
    },
    "/vi/": {
      // navbar
      navbar: viNavbar,

      // sidebar
      sidebar: viSidebar,
      navbarLocales: {
        // Change ui-ux visual lang 
        selectLangAriaLabel: "Tiếng Việt",
        langName: "Tiếng Việt",
      },
      footer: "Cung cấp trải nghiệm chơi game tốt nhất cho người chơi Genshin Impact trên PC.",

      displayFooter: true,

      metaLocales: {
        editLink: "Chỉnh sửa trang này trên GitHub",
      },
    },
    "/pt/": {
      // navbar
      navbar: ptNavbar,

      // sidebar
      sidebar: ptSidebar,

      footer: "Proporciona la mejor experiencia de juego para jugadores de PC en Genshin Impact.",

      displayFooter: true,

      metaLocales: {
        editLink: "Edita esta pagina en GitHub",
      },
    },
  },

  plugins: {
    components: {
      components: ["Badge", "BiliBili"],
      rootComponents: {
        notice: [
          {
            path: "/zh/",
            title: "贡献力量",
            content:
              "如果你有<b>网页前端</b>，<b>文档管理</b>的经验，并希望将其施展于当前文档项目中，欢迎<a href='https://github.com/Korepi/korepi-docs'>参与文档编写</a>",
            fullscreen: false,
            showOnce: false,
          },
          {
            path: "/en/",
            title: "Contribute Your Skills",
            content:
              "If you have experience in <b>web front-end development</b> and <b>document management</b>, and would like to apply it to this documentation project, you are welcome to <a href='https://github.com/Korepi/korepi-docs'>join us in writing the documentation</a>",
            fullscreen: false,
            showOnce: false,
          }
        ],
      },
    },
    feed: { rss: true },
    sitemap: {
      changefreq: "always",
    },
    // You should generate and use your own comment service
    comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      footnote: true,
      imgLazyload: true,
      include: true,
      tabs: true,
      tasklist: true,
    },

    // uncomment these if you want a pwa
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: false,
      cachePic: true,
      appendBase: true,
      themeColor: "#63a7ef",
      update: "hint",
      apple: {
        icon: "/assets/icon/144.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Korepi Start",
            short_name: "Korepi Start",
            url: "/en/start/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
