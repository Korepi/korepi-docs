import { navbar } from "vuepress-theme-hope";

export const esNavbar = navbar([
  "/es/",
  "/es/guide/",
  "/es/start/",
  {
    text: "Guía",
    icon: "lightbulb",
    prefix: "/es/",
    children: [
      {
        text: "Introducción",
        icon: "lightbulb",
        prefix: "start/",
        children: ["join", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Guías",
        icon: "lightbulb",
        prefix: "guide/",
        children: ["page", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
]);
