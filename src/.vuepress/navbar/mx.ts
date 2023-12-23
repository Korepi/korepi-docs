import { navbar } from "vuepress-theme-hope";

export const mxNavbar = navbar([
  "/mx/",
  "/mx/guide/",
  "/mx/start/",
  {
    text: "Guía",
    icon: "lightbulb",
    prefix: "/mx/",
    children: [
      {
        text: "Introducción",
        icon: "lightbulb",
        prefix: "start/",
        children: ["join"],
      },
      {
        text: "Guías",
        icon: "lightbulb",
        prefix: "guide/",
        children: ["getkey"],
      },
      {
        text: "Funciones Disponibles",
        icon: "sitemap",
        prefix: "features/",
        children: [""],
      },
    ],
  },
]);
