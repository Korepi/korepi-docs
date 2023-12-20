import { sidebar } from "vuepress-theme-hope";

export const trSidebar = sidebar({
    "/tr/": [
        "",
        {
            text: "Başlangıç",
            icon: "lightbulb",
            prefix: "start/",
            children: "structure",
        },
        {
            text: "Rehberler",
            icon: "book",
            prefix: "guide/",
            children: "structure",
        },
        {
            text: "Özellikler",
            icon: "sitemap",
            prefix: "features/",
            children: "structure",
        },
        {
            text: "Sorun Giderme",
            icon: "info-circle",
            prefix: "troubleshoot/",
            children: "structure",
        },
    ],
});
