import { sidebar } from "vuepress-theme-hope";

export const trSidebar = sidebar({
  "/tr/": [
    "",
    {
      text: "Start",
      icon: "lightbulb",
      prefix: "start/",
      children: "structure",
    },
    {
      text: "Guides",
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