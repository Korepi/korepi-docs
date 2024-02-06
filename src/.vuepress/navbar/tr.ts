import { navbar } from "vuepress-theme-hope";

export const trNavbar = navbar([
  "/tr/",
  "/tr/guide/",
  "/tr/start/",
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "/tr/",
    children: [
      {
        text: "Başlarken",
        icon: "lightbulb",
        prefix: "start/",
        children: ["join"],
      },
      {
        text: "Kılavuzlar",
        icon: "lightbulb",
        prefix: "guide/",
        children: ["getkey"],
      },
      {
        text: "Mevcut Özellikler",
        icon: "sitemap",
        prefix: "features/",
        children: [""],
      },
    ],
  },
]);
