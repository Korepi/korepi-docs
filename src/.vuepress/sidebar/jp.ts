import { sidebar } from "vuepress-theme-hope";

export const jpSidebar = sidebar({
  "/jp/": [
    "",
    {
      text: "スタート",
      icon: "lightbulb",
      prefix: "start/",
      children: "structure",
    },
    {
      text: "ガイド",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "特徴",
      icon: "sitemap",
      prefix: "features/",
      children: "structure",
    },
    {
      text: "トラブルシューティング",
      icon: "info-circle",
      prefix: "troubleshoot/",
      children: "structure",
    },
  ],
});