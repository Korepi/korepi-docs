import { navbar } from "vuepress-theme-hope";

export const jpNavbar = navbar([
  "/jp/",
  "/jp/guide/",
  "/jp/start/",
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "/jp/",
    children: [
      {
        text: "Getting Started",
        icon: "lightbulb",
        prefix: "start/",
        children: ["join"],
      },
      {
        text: "Guides",
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
