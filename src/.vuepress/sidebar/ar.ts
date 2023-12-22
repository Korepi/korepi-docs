import { sidebar } from "vuepress-theme-hope";

export const arSidebar = sidebar({
  "/ar/": [
    "",
    {
      text: "بدء",
      icon: "lightbulb",
      prefix: "start/",
      children: "structure",
    },
    {
      text: "ارشاد",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "مميزات",
      icon: "sitemap",
      prefix: "features/",
      children: "structure",
    },
    {
      text: "استكشاف الاخطاء",
      icon: "info-circle",
      prefix: "troubleshoot/",
      children: "structure",
    },
  ],
});