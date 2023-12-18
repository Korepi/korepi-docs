import { sidebar } from "vuepress-theme-hope";

export const ptSidebar = sidebar({
  "/pt/": [
    "",
    {
      text: "Inicio",
      icon: "info-circle",
      prefix: "start/",
      children: "structure",
    },
    {
      text: "Guias",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
  ],
});
