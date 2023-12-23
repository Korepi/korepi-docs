import { navbar } from "vuepress-theme-hope";

export const arNavbar = navbar([
  "/ar/",
  "/ar/guide/",
  "/ar/start/",
  {
    text: "ارشاد",
    icon: "lightbulb",
    prefix: "/ar/",
    children: [
      {
        text: "ابدء",
        icon: "lightbulb",
        prefix: "start/",
        children: ["join"],
      },
      {
        text: "ارشادات",
        icon: "lightbulb",
        prefix: "guide/",
        children: ["getkey"],
      },
      {
        text: "الميزات المتوفرة",
        icon: "sitemap",
        prefix: "features/",
        children: [""],
      },
    ],
  },
]);
