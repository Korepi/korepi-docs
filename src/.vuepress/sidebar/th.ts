import { sidebar } from "vuepress-theme-hope";

export const thSidebar = sidebar({
  "/th/": [
    "",
    {
      text: "เริ่มต้นใช้งาน",
      icon: "lightbulb",
      prefix: "start/",
      children: "structure",
    },
    {
      text: "คู่มือ",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "คุณสมบัติ",
      icon: "sitemap",
      prefix: "features/",
      children: "structure",
    },
    {
      text: "แก้ไขปัญหา",
      icon: "info-circle",
      prefix: "troubleshoot/",
      children: "structure",
    },
  ],
});