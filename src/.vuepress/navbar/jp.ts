import {navbar} from "vuepress-theme-hope";

export const jpNavbar = navbar([
    "/jp/",
    "/jp/guide/",
    "/jp/start/",
    {
        text: "ガイド",
        icon: "lightbulb",
        prefix: "/jp/",
        children: [
            {
                text: "はじめに",
                icon: "lightbulb",
                prefix: "start/",
                children: ["join"],
            },
            {
                text: "ガイド",
                icon: "lightbulb",
                prefix: "guide/",
                children: ["getkey"],
            },
            {
                text: "利用可能な機能",
                icon: "sitemap",
                prefix: "features/",
                children: [""],
            },
        ],
    },
]);
