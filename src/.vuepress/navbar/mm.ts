import { navbar } from "vuepress-theme-hope";

export const mmNavbar = navbar([
  "/mm/",
  "/mm/guide/",
  "/mm/start/",
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "/mm/",
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
