import { sidebar } from "vuepress-theme-hope";

export const viSidebar = sidebar({
  "/vi/": [
    "",
    {
      text: "Bắt Đầu",
      icon: "lightbulb",
      prefix: "start/",
      children: "structure",
    },
    {
      text: "Hướng Dẫn",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "Các Tính Năng",
      icon: "sitemap",
      prefix: "features/",
      children: "structure",
    },
    {
      text: "Khắc Phục Lỗi",
      icon: "info-circle",
      prefix: "troubleshoot/",
      children: "structure",
    },
  ],
});