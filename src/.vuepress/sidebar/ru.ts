import { sidebar } from "vuepress-theme-hope";

export const ruSidebar = sidebar({
  "/ru/": [
    "",
    {
      text: "Начало",
      icon: "info-circle",
      prefix: "start/",
      children: "structure",
    },
    {
      text: "Гайды",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "Функции",
      icon: "sitemap",
      prefix: "features/",
      children: "structure",
    },
    {
      text: "Устранение неполадок",
      icon: "info-circle",
      prefix: "troubleshoot/",
      children: "structure",
    },
  ],
});
