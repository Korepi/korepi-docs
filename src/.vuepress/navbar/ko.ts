import { navbar } from "vuepress-theme-hope";

export const koNavbar = navbar([
  "/ko/",
  "/ko/guide/",
  "/ko/start/",
  {
    text: "가이드",
    icon: "lightbulb",
    prefix: "/ko/",
    children: [
      {
        text: "시작하기",
        icon: "lightbulb",
        prefix: "start/",
        children: ["join"],
      },
      {
        text: "가이드",
        icon: "lightbulb",
        prefix: "guide/",
        children: ["getkey"],
      },
      {
        text: "사용 가능한 기능들",
        icon: "sitemap",
        prefix: "features/",
        children: [""],
      },
    ],
  },
]);
