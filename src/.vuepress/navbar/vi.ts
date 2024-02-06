import { navbar } from "vuepress-theme-hope";

export const viNavbar = navbar([
  "/vi/",
  "/vi/guide/",
  "/vi/start/",
  {
    text: "Hướng Dẫn",
    icon: "lightbulb",
    prefix: "/vi/",
    children: [
      {
        text: "Bắt Đầu",
        icon: "lightbulb",
        prefix: "start/",
        children: ["join"],
      },
      {
        text: "Hướng Dẫn",
        icon: "lightbulb",
        prefix: "guide/",
        children: ["page"],
      },
      {
        text: "Các Tính Năng",
        icon: "sitemap",
        prefix: "features/",
        children: [""],
      },
    ],
  },
]);
