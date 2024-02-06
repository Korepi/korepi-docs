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
