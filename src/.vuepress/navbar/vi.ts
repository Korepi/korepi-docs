import { navbar } from "vuepress-theme-hope";

export const viNavbar = navbar([
  "/vi/",
  "/vi/guide/",
  "/vi/start/",
  {
    text: "Hướng dẫn",
    icon: "lightbulb",
    prefix: "/vi/",
    children: [
      {
        text: "Bắt đầu nhanh",
        icon: "lightbulb",
        prefix: "start/",
        children: ["join", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Hướng dẫn",
        icon: "lightbulb",
        prefix: "guide/",
        children: ["page", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Available Features",
        icon: "sitemap",
        prefix: "features/",
        children: ["", { text: "", icon: "ellipsis", link: "#" }],
      },
    ],
  },
]);
