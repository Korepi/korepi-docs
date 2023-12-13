import { navbar } from "vuepress-theme-hope";

export const idNavbar = navbar([
  "/id/",
  "/id/guide/",
  "/id/start/",
  {
    text: "Panduan",
    icon: "lightbulb",
    prefix: "/id/",
    children: [
      {
        text: "Buku Pemula",
        icon: "lightbulb",
        prefix: "start/",
        children: ["join", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Panduan",
        icon: "lightbulb",
        prefix: "guide/",
        children: ["resethwid", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
]);
