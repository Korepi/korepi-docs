import { navbar } from "vuepress-theme-hope";

export const thNavbar = navbar([
  "/th/",
  "/th/guide/",
  "/th/start/",
  {
    text: "คู่มือ",
    icon: "lightbulb",
    prefix: "/th/",
    children: [
      {
        text: "เริ่มต้นใช้งาน",
        icon: "lightbulb",
        prefix: "start/",
        children: ["join"],
      },
      {
        text: "คู่มือ",
        icon: "lightbulb",
        prefix: "guide/",
        children: ["getkey"],
      },
      {
        text: "คุณสมบัติ",
        icon: "sitemap",
        prefix: "features/",
        children: [""],
      },
    ],
  },
]);
