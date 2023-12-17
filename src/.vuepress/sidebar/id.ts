import { sidebar } from "vuepress-theme-hope";

export const idSidebar = sidebar({
  "/id/": [
    "",
    {
      text: "Buku Pemula",
      icon: "info-circle",
      prefix: "start/",
      children: "structure",
    },
    {
      text: "Panduan",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "Fitur",
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