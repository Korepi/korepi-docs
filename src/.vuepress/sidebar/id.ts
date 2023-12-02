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
  ],
});