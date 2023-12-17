import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// @ts-ignore
import { redirectPlugin } from "vuepress-plugin-redirect";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
// @ts-ignore
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
    base: "/",
    head: [
        ['meta', { name: 'baidu-site-verification', content: 'codeva-GnP8DZ1yQi' }]
    ],
    locales: {
        "/en/": {
            lang: "en-US",
            title: "Korepi",
            description: "Help on Korepi",
        },
        "/zh/": {
            lang: "zh-CN",
            title: "Korepi",
            description: "Korepi 中文文档介绍"
        },
        "/ru/": {
            lang: "ru-RU",
            title: "Korepi",
            description: "Помощь по Korepi",
        },
        "/id/": {
            lang: "id-ID",
            title: "Korepi",
            description: "Pertolongan Korepi"
        },
        "/es/": {
            lang: "es-ES",
            title: "Korepi",
            description: "Ayuda en Korepi"
        },
        "/vi/": {
            lang: "vi-VN",
            title: "Korepi",
            description: "Trợ giúp về Korepi",
        },
        "/pt/": {
            lang: "pt-BR",
            title: "Korepi",
            description: "Ayuda en Korepi"
        },
    },
    plugins: [
        docsearchPlugin({
            appId: "NU9DPY3560",
            apiKey: "7c97cf95706fe492fad67390ad3c401b",
            indexName: "korepi",
            locales: {
                "/zh/": {
                    placeholder: "搜索文档",
                    translations: {
                        button: {
                            buttonText: "搜索文档",
                            buttonAriaLabel: "搜索文档",
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: "清除查询条件",
                                resetButtonAriaLabel: "清除查询条件",
                                cancelButtonText: "取消",
                                cancelButtonAriaLabel: "取消",
                            },
                            startScreen: {
                                recentSearchesTitle: "搜索历史",
                                noRecentSearchesText: "没有搜索历史",
                                saveRecentSearchButtonTitle: "保存至搜索历史",
                                removeRecentSearchButtonTitle: "从搜索历史中移除",
                                favoriteSearchesTitle: "收藏",
                                removeFavoriteSearchButtonTitle: "从收藏中移除",
                            },
                            errorScreen: {
                                titleText: "无法获取结果",
                                helpText: "你可能需要检查你的网络连接",
                            },
                            footer: {
                                selectText: "选择",
                                navigateText: "切换",
                                closeText: "关闭",
                                searchByText: "搜索提供者",
                            },
                            noResultsScreen: {
                                noResultsText: "无法找到相关结果",
                                suggestedQueryText: "你可以尝试查询",
                                reportMissingResultsText: "你认为该查询应该有结果？",
                                reportMissingResultsLinkText: "点击反馈",
                            },
                        },
                    },
                },
                "/en/": {
                    placeholder: "Search",
                    translations: {
                        button: {
                            buttonText: "Search",
                            buttonAriaLabel: "Search",
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: "Clear Search Criteria",
                                resetButtonAriaLabel: "Clear Search Criteria",
                                cancelButtonText: "Back",
                                cancelButtonAriaLabel: "Back",
                            },
                            startScreen: {
                                recentSearchesTitle: "Search History",
                                noRecentSearchesText: "No search history",
                                saveRecentSearchButtonTitle: "Save to Search History",
                                removeRecentSearchButtonTitle: "Remove from Search History",
                                favoriteSearchesTitle: "Favorites",
                                removeFavoriteSearchButtonTitle: "Remove from Favorites",
                            },
                            errorScreen: {
                                titleText: "Failed to Retrieve Results",
                                helpText: "Check your internet connection and the requested resource.",
                            },
                            footer: {
                                selectText: "Select",
                                navigateText: "Toggle",
                                closeText: "Close",
                                searchByText: "We use search",
                            },
                            noResultsScreen: {
                                noResultsText: "Couldn't find anything for your query:",
                                suggestedQueryText: "You can try a different query",
                                reportMissingResultsText: "Do you think this query should yield some results :> ?",
                                reportMissingResultsLinkText: "Contact us",
                            },
                        },
                    },
                },
                "/ru/": {
                    placeholder: "Поиск",
                    translations: {
                        button: {
                            buttonText: "Поиск",
                            buttonAriaLabel: "Поиск",
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: "Четкие критерии запроса",
                                resetButtonAriaLabel: "Четкие критерии запроса",
                                cancelButtonText: "Назад",
                                cancelButtonAriaLabel: "Назад",
                            },
                            startScreen: {
                                recentSearchesTitle: "История поиска",
                                noRecentSearchesText: "Нету истории поиска",
                                saveRecentSearchButtonTitle: "Сохранить в историю поиска",
                                removeRecentSearchButtonTitle: "Удалить из истории поиска",
                                favoriteSearchesTitle: "Закладки",
                                removeFavoriteSearchButtonTitle: "Удалить из закладок",
                            },
                            errorScreen: {
                                titleText: "Не удалось получить результат",
                                helpText: "Проверте свое подключение к Интернету, а так-же запрашиваемый ресурс",
                            },
                            footer: {
                                selectText: "Выбрать",
                                navigateText: "Переключить",
                                closeText: "Закрыть",
                                searchByText: "Мы используем поиск",
                            },
                            noResultsScreen: {
                                noResultsText: "Не удалось ничего найти по вашему запросу :",
                                suggestedQueryText: "Вы можете попробовать запрос",
                                reportMissingResultsText: "Как вы думаете, должен ли этот запрос давать какой-то результат :> ?",
                                reportMissingResultsLinkText: "Связаться с нами",
                            },
                        },
                    },
                },
                "/id/": {
                    placeholder: "Pencarian",
                    translations: {
                        button: {
                            buttonText: "Pencarian",
                            buttonAriaLabel: "Pencarian",
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: "Hapus Pencarian",
                                resetButtonAriaLabel: "Hapus Pencarian",
                                cancelButtonText: "Kembali",
                                cancelButtonAriaLabel: "Kembali",
                            },
                            startScreen: {
                                recentSearchesTitle: "Sejarah Pencariann",
                                noRecentSearchesText: "Tidak Ada Sejarah Pencarian",
                                saveRecentSearchButtonTitle: "Simpan ke Sejarah Pencarian",
                                removeRecentSearchButtonTitle: "Buang dari Sejarah Pencarian",
                                favoriteSearchesTitle: "Favorit",
                                removeFavoriteSearchButtonTitle: "Buang dari Favorit",
                            },
                            errorScreen: {
                                titleText: "Gagal mendapatkan hasil",
                                helpText: "Periksa koneksi internet anda dan sumber daya yang diminta.",
                            },
                            footer: {
                                selectText: "Pilih",
                                navigateText: "Toggle",
                                closeText: "Tutup",
                                searchByText: "Pencarian Menggunakan Teks",
                            },
                            noResultsScreen: {
                                noResultsText: "Tidak dapat menemukan apa pun untuk pertanyaan anda:",
                                suggestedQueryText: "Anda boleh mencoba pertanyaan yang lain",
                                reportMissingResultsText: "Apakah menurut anda pertanyaan ini perlu menghasilkan beberapa jawaban :> ?",
                                reportMissingResultsLinkText: "Hubungi kami!",
                            },
                        },
                    },
                },
                "/es/": {
                    placeholder: "Buscar",
                    translations: {
                        button: {
                            buttonText: "Buscar",
                            buttonAriaLabel: "Buscar",
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: "Limpiar Criterio de Busqueda",
                                resetButtonAriaLabel: "Limpiar Criterio de Busqueda",
                                cancelButtonText: "Volver",
                                cancelButtonAriaLabel: "Volver",
                            },
                            startScreen: {
                                recentSearchesTitle: "Historial de Busqueda",
                                noRecentSearchesText: "No hay historial de busqueda",
                                saveRecentSearchButtonTitle: "Guardar en historial de busqueda",
                                removeRecentSearchButtonTitle: "Quitar del historial de busqueda",
                                favoriteSearchesTitle: "Favoritos",
                                removeFavoriteSearchButtonTitle: "Quitar de Favoritos",
                            },
                            errorScreen: {
                                titleText: "No se pudieron recuperar los resultados",
                                helpText: "Compureba tu conexion de internet y recursos solicitados.",
                            },
                            footer: {
                                selectText: "Seleccionar",
                                navigateText: "Activar",
                                closeText: "Cerrar",
                                searchByText: "Usamos Busqueda",
                            },
                            noResultsScreen: {
                                noResultsText: "No se pudo encontrar nada para su consulta:",
                                suggestedQueryText: "Puedes pruabr una consulta diferente",
                                reportMissingResultsText: "¿Crees que esta consulta debería arrojar algunos resultados :> ?",
                                reportMissingResultsLinkText: "Contactanos",
                            },
                        },
                    },
                },
                "/pt/": {
                    placeholder: "Buscar",
                    translations: {
                        button: {
                            buttonText: "Buscar",
                            buttonAriaLabel: "Buscar",
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: "Limpiar Criterio de Busqueda",
                                resetButtonAriaLabel: "Limpiar Criterio de Busqueda",
                                cancelButtonText: "Volver",
                                cancelButtonAriaLabel: "Volver",
                            },
                            startScreen: {
                                recentSearchesTitle: "Historial de Busqueda",
                                noRecentSearchesText: "No hay historial de busqueda",
                                saveRecentSearchButtonTitle: "Guardar en historial de busqueda",
                                removeRecentSearchButtonTitle: "Quitar del historial de busqueda",
                                favoriteSearchesTitle: "Favoritos",
                                removeFavoriteSearchButtonTitle: "Quitar de Favoritos",
                            },
                            errorScreen: {
                                titleText: "No se pudieron recuperar los resultados",
                                helpText: "Compureba tu conexion de internet y recursos solicitados.",
                            },
                            footer: {
                                selectText: "Seleccionar",
                                navigateText: "Activar",
                                closeText: "Cerrar",
                                searchByText: "Usamos Busqueda",
                            },
                            noResultsScreen: {
                                noResultsText: "No se pudo encontrar nada para su consulta:",
                                suggestedQueryText: "Puedes pruabr una consulta diferente",
                                reportMissingResultsText: "¿Crees que esta consulta debería arrojar algunos resultados :> ?",
                                reportMissingResultsLinkText: "Contactanos",
                            },
                        },
                    },
                },
            },
        }),
        redirectPlugin({
            defaultLocale: "/en/",
            autoLocale: true,
            switchLocale: "modal",
            localeConfig: {
                "/en/": ["en-US", "en-UK", "en"],
                "/zh/": ["zh-CN", "zh-TW", "zh"],
                "/ru/": ["ru-RU", "ru-KZ", "ru-BY", "ru-UA", "ru-MD", "ru-LV", "tt-RU", "ru"],
                "/id/": ["id-ID", "id"],
                "/es/": ["es-ES", "es"],
                "/vi/": ["vi-VN", "vi"],
                "/pt/": ["pt-PT", "pt-BR", "pt"],
            },
        }),
        googleAnalyticsPlugin({
            id: 'G-D5RM42XS38',
        }),
    ],
    theme,

    // Enable it with pwa
    shouldPrefetch: false,
});


