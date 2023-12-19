import { navbar } from "vuepress-theme-hope";

export const ptNavbar = navbar([
  "/pt/",
  "/pt/guide/",
  "/pt/start/",
  {
    text: "Guia",
    icon: "lightbulb",
    prefix: "/pt/",
    children: [
      {
        text: "Introdução",
        icon: "lightbulb",
        prefix: "start/",
        children: ["join"],
      },
      {
        text: "Guias",
        icon: "lightbulb",
        prefix: "guide/",
        children: ["getkey"],
      },
      {
        text: "Available Features",
        icon: "sitemap",
        prefix: "features/",
        children: [""],
      },
    ],
  },
]);
