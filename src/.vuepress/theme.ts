import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar, ruNavbar, idNavbar, esNavbar, mxNavbar, mmNavbar, viNavbar, ptNavbar, arNavbar, jpNavbar, trNavbar, koNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar, ruSidebar, idSidebar, esSidebar, mxSidebar, mmSidebar, viSidebar, ptSidebar, arSidebar, jpSidebar, trSidebar, koSidebar } from "./sidebar/index.js";


export default hopeTheme({
    hostname: "https://korepi.com/",

    author: {
        name: "Micah",
        url: "https://github.com/micah123321/",
    },

    iconAssets: "fontawesome-with-brands",

    logo: "/logo.svg",

    repo: "Korepi/korepi-docs",

    docsDir: "src",

    locales: {
        "/en/": {
            navbar: enNavbar,
            sidebar: enSidebar,
            footer:
                "Provides the best gaming experience for PC players in Genshin Impact.",
            displayFooter: true,
            metaLocales: {
                editLink: "Edit this page on GitHub",
            },
        },

        "/ru/": {
            navbar: ruNavbar,
            sidebar: ruSidebar,
            footer:
                "Обеспечивает лучший игровой опыт для игроков на ПК в Genshin Impact",
            displayFooter: true,
            metaLocales: {
                editLink: "Редактировать страницу на GitHub",
            },
        },

        "/id/": {
            navbar: idNavbar,
            sidebar: idSidebar,
            footer:
                "Memberikan pengalaman bermain game terbaik untuk pemain PC di Genshin Impact.",
            displayFooter: true,
            metaLocales: {
                editLink: "Edit halaman ini di GitHub",
            },
        },
        "/zh/": {
            navbar: zhNavbar,
            sidebar: zhSidebar,
            footer: "为原神 PC 端玩家带来最好的游戏体验",
            displayFooter: true,
            navbarLocales: {
                selectLangAriaLabel: "简体中文",
                langName: "简体中文",
            },
            metaLocales: {
                editLink: "在 GitHub 上编辑此页",
            },
        },
        "/es/": {
            navbar: esNavbar,
            sidebar: esSidebar,
            footer:
                "Proporciona la mejor experiencia de juego para jugadores de PC en Genshin Impact.",
            displayFooter: true,
            metaLocales: {
                editLink: "Edita esta pagina en GitHub",
            },
        },
        "/mx/": {
            navbar: mxNavbar,
            sidebar: mxSidebar,
            footer:
                "Proporciona la mejor experiencia de juego para jugadores de PC en Genshin Impact.",
            displayFooter: true,
            navbarLocales: {
                langName: "Español Latino",
            },
            metaLocales: {
                editLink: "Edita esta pagina en GitHub",
            },
        },
        "/mm/": {
            navbar: mmNavbar,
            sidebar: mmSidebar,
            footer:
                "Genshin Impact ရှိ ကစားသမားများအတွက် အကောင်းဆုံး gaming အတွေ့အကြုံကို ပေးသည်။",
            displayFooter: true,
            navbarLocales: {
                langName: "Burmese",
            },
            metaLocales: {
                editLink: "GitHub တွင် ဤစာမျက်နှာကို တည်းဖြတ်ပါ။",
            },
        },
        "/vi/": {
            navbar: viNavbar,
            sidebar: viSidebar,
            navbarLocales: {
                selectLangAriaLabel: "Tiếng Việt",
                langName: "Tiếng Việt",
            },
            footer:
                "Cung cấp trải nghiệm chơi game tốt nhất cho người chơi Genshin Impact trên PC.",
            displayFooter: true,
            metaLocales: {
                editLink: "Chỉnh sửa trang này trên GitHub",
            },
        },
        "/pt/": {
            navbar: ptNavbar,
            sidebar: ptSidebar,
            footer:
                "Fornece a melhor experiência de jogo para jogadores de PC em Genshin Impact.",
            displayFooter: true,
            metaLocales: {
                editLink: "Edite esta pagina em GitHub",
            },
        },
        "/ar/": {
            navbar: arNavbar,
            sidebar: arSidebar,
            rtl: true,
            footer:
                ".يوفر أفضل تجربة لعب للاعبي جينشن امباكت عل الحاسوب",
            navbarLocales: {
                langName: "العربية",
            },
            metaLocales: {
                editLink: "GitHub تحرير هذه الصفحة على",
            },
        },
        "/jp/": {
            navbar: jpNavbar,
            sidebar: jpSidebar,
            footer:
                "Genshin ImpactでPCプレイヤーに最高のゲーム体験を提供。",

            displayFooter: true,

            metaLocales: {
                editLink: "GitHubでこのページを編集する",
            },
        },
        "/tr/": {
            navbar: trNavbar,
            sidebar: trSidebar,
            footer:
                "Genshin Impact PC oyuncuları için en iyi oyun deneyimini sağlar.",

            displayFooter: true,

            metaLocales: {
                editLink: "GitHub'da bu sayfayı düzenleyin",
            },
        },
        "/ko/": {
            navbar: koNavbar,
            sidebar: koSidebar,
            footer:
                "원신 PC 플레이어에게 최고의 게임 경험 제공.",

            displayFooter: true,

            metaLocales: {
                editLink: "Github에서 수정",
            },
        },
    },

    plugins: {
        components: {
            components: ["Badge", "BiliBili"],
            rootComponents: {
                notice: [
                    {
                        path: "/zh/",
                        title: "贡献力量",
                        content:
                            "如果你有<b>网页前端</b>，<b>文档管理</b>的经验，并希望将其施展于当前文档项目中，欢迎<a href='https://github.com/Korepi/korepi-docs'>参与文档编写</a>",
                        fullscreen: false,
                        showOnce: false,
                    },
                    {
                        path: "/en/",
                        title: "Contribute Your Skills",
                        content:
                            "If you have experience in <b>web front-end development</b> and <b>document management</b>, and would like to apply it to this documentation project, you are welcome to <a href='https://github.com/Korepi/korepi-docs'>join us in writing the documentation</a>",
                        fullscreen: false,
                        showOnce: false,
                    },
                    {
                        path: "/ko/",
                        title: "당신의 능력으로 기여하세요.",
                        content:
                            "당신이 <b>웹 프론트엔드 개발</b>과 <b>문서 관리</b>에 대한 경험이 있고, 이 문서 프로젝트에 기여하고 싶다면, 당신이 <a href='https://github.com/Korepi/korepi-docs'>우리 문서를 작성</a>하는 것을 환영합니다.",
                        fullscreen: false,
                        showOnce: false,
                    },
                    {
                        path: "/ru/",
                        title: "Помощь",
                        content:
                            "Если у вас есть опыт работы в разработке <b> web Front-End </b> и <b> управления документами </b>, и вы хотели бы применить его к этому проекту документации, вы можете помочь в написании документации и ее переводу <a href = 'https://github.com/korepi/korepi-docs'> </a>",
                        fullscreen: false,
                        showOnce: false,
                    },
                    {
                        path: "/es/",
                        title: "Ayuda con tu talento",
                        content:
                            "Si tienes experiencia en <b>desarrollo front-end</b> y <b>gestión de documentos</b>, y te gustaría aplicarlo en este proyecto, eres bienvenid@ a <a href='https://github.com/Korepi/korepi-docs'>unirte a ayudarnos con la documentación</a>",
                        fullscreen: false,
                        showOnce: false,
                    },
                    {
                        path: "/mx/",
                        title: "Ayuda con tu talento",
                        content:
                            "Si tienes experiencia en <b>desarrollo front-end</b> y <b>gestión de documentos</b>, y te gustaría participar en este proyecto, eres bienvenid@ a <a href='https://github.com/Korepi/korepi-docs'>unirte a ayudarnos con la documentación</a>",
                        fullscreen: false,
                        showOnce: false,
                    },
                    {
                        path: "/mm/",
                        title: "Contribute Your Skills",
                        content:
                            "If you have experience in <b>web front-end development</b> and <b>document management</b>, and would like to apply it to this documentation project, you are welcome to <a href='https://github.com/Korepi/korepi-docs'>join us in writing the documentation</a>",
                        fullscreen: false,
                        showOnce: false,
                    },
                    {
                        path: "/id/",
                        title: "Contribute Your Skills",
                        content:
                            "If you have experience in <b>web front-end development</b> and <b>document management</b>, and would like to apply it to this documentation project, you are welcome to <a href='https://github.com/Korepi/korepi-docs'>join us in writing the documentation</a>",
                        fullscreen: false,
                        showOnce: false,
                    },
                    {
                        path: "/pt/",
                        title: "Contribute Your Skills",
                        content:
                            "If you have experience in <b>web front-end development</b> and <b>document management</b>, and would like to apply it to this documentation project, you are welcome to <a href='https://github.com/Korepi/korepi-docs'>join us in writing the documentation</a>",
                        fullscreen: false,
                        showOnce: false,
                    },
                    {
                        path: "/vi/",
                        title: "Đóng Góp Kỹ Năng Của Bạn",
                        content:
                            "Nếu như bạn có kinh nghiệm về <b>phát triển web front-end</b> cùng với <b>quản lý tài liệu</b>, và mong muốn tham gia dự án tài liệu này, bạn luôn được chào đón <a href='https://github.com/Korepi/korepi-docs'>tham gia viết tài liệu</a>",
                        fullscreen: false,
                        showOnce: false,
                    },
                    {
                        path: "/ar/",
                        title: "ساهم بمهاراتك",
                        content:
                            "إذا كانت لديك خبرة في <b>تطوير واجهة الويب الأمامية</b> و<b>إدارة المستندات</b>، وترغب في تطبيقها على مشروع التوجيه هذا، فنحن نرحب بك في <a href='https ://github.com/Korepi/korepi-docs'>انضم إلينا في كتابة الوثائق</a>",
                        fullscreen: false,
                        showOnce: false,
                    },
                    {
                        path: "/jp/",
                        title: "あなたのスキルを提供しよう",
                        content:
                            "<b>ウェブフロントエンド開発</b> と <b>ドキュメント管理</b>の経験をお持ちの方で、このドキュメンテーション・プロジェクトにそれを活かしたい方は、 <a href='https://github.com/Korepi/korepi-docs'>ぜひ私たちと一緒に活動してください</a>",
                        fullscreen: false,
                        showOnce: false,
                    },
                    {
                        path: "/tr/",
                        title: "Yeteneklerinizle Katkıda Bulunun",
                        content:
                            "Eğer şu alanlarda deneyiminiz varsa <b>WEB FRONT-END Geliştirme</b> Ve <b>Belge Yönetimi</b>, ve bu dokümantasyon projesine uygulamak istiyorsanız, aşağıdaki adrese başvurabilirsiniz <a href='https://github.com/Korepi/korepi-docs'>dokümantasyon yazımında bize katılın</a>",
                        fullscreen: false,
                        showOnce: false,
                    },
                ],
            },
        },
        feed: { rss: true },
        sitemap: {
            changefreq: "always",
        },
        // You should generate and use your own comment service
        comment: {
            provider: "Giscus",
            repo: "vuepress-theme-hope/giscus-discussions",
            repoId: "R_kgDOG_Pt2A",
            category: "Announcements",
            categoryId: "DIC_kwDOG_Pt2M4COD69",
        },

        // All features are enabled for demo, only preserve features you need here
        mdEnhance: {
            align: true,
            footnote: true,
            imgLazyload: true,
            include: true,
            tabs: true,
            tasklist: true,
        },

        // uncomment these if you want a pwa
        pwa: {
            favicon: "/favicon.ico",
            cacheHTML: false,
            cachePic: true,
            appendBase: true,
            themeColor: "#63a7ef",
            update: "hint",
            apple: {
                icon: "/assets/icon/144.png",
                statusBarColor: "black",
            },
            msTile: {
                image: "/assets/icon/144.png",
                color: "#ffffff",
            },
            manifest: {
                icons: [
                    {
                        src: "/assets/icon/512.png",
                        sizes: "512x512",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/192.png",
                        sizes: "192x192",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                ],
                shortcuts: [
                    {
                        name: "Korepi Start",
                        short_name: "Korepi Start",
                        url: "/en/start/",
                        icons: [
                            {
                                src: "/assets/icon/guide-maskable.png",
                                sizes: "192x192",
                                purpose: "maskable",
                                type: "image/png",
                            },
                        ],
                    },
                ],
            },
        },
    },
});
