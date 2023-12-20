import { sidebar } from "vuepress-theme-hope";

export const viSidebar = sidebar({
  "/vi/": [
    "",
    {
      text: "Bắt đầu",
      icon: "lightbulb",
      prefix: "start/",
      children: "structure",
    },
    {
      text: "Hướng dẫn",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "Features",
      icon: "sitemap",
      prefix: "features/",
      children: "structure",
    },
    {
      text: "Troubleshoot",
      icon: "info-circle",
      prefix: "troubleshoot/",
      children: "structure",
    },
  ],
});