import { navbar } from "vuepress-theme-hope";

export const ruNavbar = navbar([
  "/ru/",
  "/ru/guide/",
  "/ru/start/",
  {
    text: "Гайды",
    icon: "lightbulb",
    prefix: "/ru/",
    children: [
      {
        text: "Начало",
        icon: "lightbulb",
        prefix: "start/",
        children: ["join", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Гайды",
        icon: "lightbulb",
        prefix: "guide/",
        children: ["page", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
]);
