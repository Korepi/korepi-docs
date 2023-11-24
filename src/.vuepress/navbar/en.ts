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
        children: ["join", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Guides",
        icon: "lightbulb",
        prefix: "guide/",
        children: ["page", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
]);
