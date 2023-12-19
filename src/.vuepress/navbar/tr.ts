import { navbar } from "vuepress-theme-hope";

export const trNavbar = navbar([
    "/tr/",
    "/tr/guide/",
    "/tr/start/",
    {
        text: "Rehber",
        icon: "lightbulb",
        prefix: "/tr/",
        children: [
            {
                text: "Başlarken",
                icon: "lightbulb",
                prefix: "start/",
                children: ["join"],
            },
            {
                text: "Rehberler",
                icon: "lightbulb",
                prefix: "guide/",
                children: ["getkey"],
            },
            {
                text: "Kullanılabilir Özellikler",
                icon: "sitemap",
                prefix: "features/",
                children: [""],
            },
        ],
    },
]);
