import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// @ts-ignore
import { redirectPlugin } from "vuepress-plugin-redirect";
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
    redirectPlugin({
      defaultLocale: "/en/",
      autoLocale: true,
      switchLocale: "modal",
      localeConfig: {
        "/en/": ["en-US", "en-UK", "en"],
        "/zh/": ["zh-CN", "zh-TW", "zh"],
      },
    })
    ]  ,
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
