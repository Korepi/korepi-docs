import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "Start",
      icon: "info-circle",
      prefix: "start/",
      children: "structure",
    },
    {
      text: "Guides",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
  ],
});