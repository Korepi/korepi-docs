import { navbar } from "vuepress-theme-hope";

export const koNavbar = navbar([
  "/ko/",
  "/ko/guide/",
  "/ko/start/",
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "/ko/",
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
