import { navbar } from "vuepress-theme-hope";

export const ptNavbar = navbar([
  "/pt/",
  "/pt/guide/",
  "/pt/start/",
  {
    text: "Guía",
    icon: "lightbulb",
    prefix: "/pt/",
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
        text: "Available Features",
        icon: "sitemap",
        prefix: "features/",
        children: [""],
      },
    ],
  },
]);
