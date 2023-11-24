import { navbar } from "vuepress-theme-hope";

export const ruNavbar = navbar([
  "/ru/",
  "/ru/guide/",
  "/ru/start/",
  {
    text: "Гайды",
    icon: "lightbulb",
    prefix: "/ru/guide/",
    children: [
      {
        text: "Начало",
        icon: "lightbulb",
        prefix: "start/",
        children: ["start", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Гайды",
        icon: "lightbulb",
        prefix: "guide/",
        children: ["guide", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
]);
