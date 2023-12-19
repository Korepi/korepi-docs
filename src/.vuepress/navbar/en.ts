import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  "/en/guide/",
  "/en/start/",
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "/en/",
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
