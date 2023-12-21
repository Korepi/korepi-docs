import { sidebar } from "vuepress-theme-hope";

export const mxSidebar = sidebar({
  "/mx/": [
    "",
    {
      text: "Inicio",
      icon: "lightbulb",
      prefix: "start/",
      children: "structure",
    },
    {
      text: "Guías",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "Lista de Funciones",
      icon: "sitemap",
      prefix: "features/",
      children: "structure",
    },
    {
      text: "Errores",
      icon: "info-circle",
      prefix: "troubleshoot/",
      children: "structure",
    },
  ],
});