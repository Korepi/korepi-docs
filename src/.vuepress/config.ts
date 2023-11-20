import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// @ts-ignore
import { redirectPlugin } from "vuepress-plugin-redirect";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
// @ts-ignore
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Korepi",
      description: "Korepi 中文文档介绍",
    },
  },
  plugins: [
    // docsearchPlugin({
    //   appId: "28CTGDOOQD",
    //   apiKey: "72d7a9a0f9f0466218ea19988886dce8",
    //   indexName: "hutao",
    //   locales: {
    //     "/zh/": {
    //       placeholder: "搜索文档",
    //       translations: {
    //         button: {
    //           buttonText: "搜索文档",
    //           buttonAriaLabel: "搜索文档",
    //         },
    //         modal: {
    //           searchBox: {
    //             resetButtonTitle: "清除查询条件",
    //             resetButtonAriaLabel: "清除查询条件",
    //             cancelButtonText: "取消",
    //             cancelButtonAriaLabel: "取消",
    //           },
    //           startScreen: {
    //             recentSearchesTitle: "搜索历史",
    //             noRecentSearchesText: "没有搜索历史",
    //             saveRecentSearchButtonTitle: "保存至搜索历史",
    //             removeRecentSearchButtonTitle: "从搜索历史中移除",
    //             favoriteSearchesTitle: "收藏",
    //             removeFavoriteSearchButtonTitle: "从收藏中移除",
    //           },
    //           errorScreen: {
    //             titleText: "无法获取结果",
    //             helpText: "你可能需要检查你的网络连接",
    //           },
    //           footer: {
    //             selectText: "选择",
    //             navigateText: "切换",
    //             closeText: "关闭",
    //             searchByText: "搜索提供者",
    //           },
    //           noResultsScreen: {
    //             noResultsText: "无法找到相关结果",
    //             suggestedQueryText: "你可以尝试查询",
    //             reportMissingResultsText: "你认为该查询应该有结果？",
    //             reportMissingResultsLinkText: "点击反馈",
    //           },
    //         },
    //       },
    //     },
    //     "/en/": {
    //       placeholder: "Search documents",
    //       translations: {
    //         button: {
    //           buttonText: "Search documents",
    //         },
    //       },
    //     },
    //   },
    // }),
    redirectPlugin({
      defaultLocale: "/en/",
      autoLocale: true,
      switchLocale: "modal",
      localeConfig: {
        "/en/": ["en-US", "en-UK", "en"],
        "/zh/": ["zh-CN", "zh-TW", "zh"],
      },
    }),
    googleAnalyticsPlugin({
      id: 'G-T5SPSB45H5',
    }),
    ]  ,
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
