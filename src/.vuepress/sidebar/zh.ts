import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "快速开始",
      icon: "laptop-code",
      prefix: "start/",
      children: "structure",
    },
    {
      text: "使用教程",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "功能",
      icon: "sitemap",
      prefix: "features/",
      children: "structure",
    },
    {
      text: "故障排除",
      icon: "info-circle",
      prefix: "troubleshoot/",
      children: "structure",
    },
  ],
});
