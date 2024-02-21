import { sidebar } from "vuepress-theme-hope";

export const koSidebar = sidebar({
  "/ko/": [
    "",
    {
      text: "시작",
      icon: "lightbulb",
      prefix: "start/",
      children: "structure",
    },
    {
      text: "가이드",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "기능",
      icon: "sitemap",
      prefix: "features/",
      children: "structure",
    },
    {
      text: "트러블슈팅",
      icon: "info-circle",
      prefix: "troubleshoot/",
      children: "structure",
    },
  ],
});