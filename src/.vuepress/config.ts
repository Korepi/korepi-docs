import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// @ts-ignore
import { redirectPlugin } from "vuepress-plugin-redirect";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
// @ts-ignore
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
    base: "/",
    head: [['meta', { name: 'baidu-site-verification', content: 'codeva-GnP8DZ1yQi' }]],
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
        "/mx/": {
            lang: "es-MX",
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
            description: "Ajuda em Korepi"
        },
        "/ko/": {
            lang: "ko-KR",
            title: "Korepi",
            description: "Korepi 도움말"
        },
        "/tr/": {
            lang: "tr-TR",
            title: "Korepi",
            description: "Yardım için Korepi"
        },
        "/ar/": {
            lang: "ar",
            title: "Korepi",
            description: "للمساعدة Korepi"
        },
        "/jp/": {
            lang: "jp-JP",
            title: "Korepi",
            description: "Korepiに関するヘルプ",
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
                                searchByText: "Поиск",
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
                "/mx/": {
                    placeholder: "Buscar",
                    translations: {
                        button: {
                            buttonText: "Buscar",
                            buttonAriaLabel: "Buscar",
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: "Limpiar Criterio de Búsqueda",
                                resetButtonAriaLabel: "Limpiar Criterio de Búsqueda",
                                cancelButtonText: "Volver",
                                cancelButtonAriaLabel: "Volver",
                            },
                            startScreen: {
                                recentSearchesTitle: "Historial de Búsqueda",
                                noRecentSearchesText: "No hay historial de búsqueda",
                                saveRecentSearchButtonTitle: "Guardar en historial de búsqueda",
                                removeRecentSearchButtonTitle: "Quitar del historial de búsqueda",
                                favoriteSearchesTitle: "Favoritos",
                                removeFavoriteSearchButtonTitle: "Quitar de Favoritos",
                            },
                            errorScreen: {
                                titleText: "No es posible obtener los resultados",
                                helpText: "Por favor, comprueba tu conexión a internet.",
                            },
                            footer: {
                                selectText: "Seleccionar",
                                navigateText: "Cambiar",
                                closeText: "Cerrar",
                                searchByText: "Hecho por",
                            },
                            noResultsScreen: {
                                noResultsText: "No se han encontrado resultados:",
                                suggestedQueryText: "Intenta con una consulta diferente",
                                reportMissingResultsText: "¿Crees que esta consulta debería arrojar algunos resultados :> ?",
                                reportMissingResultsLinkText: "Contáctenos",
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
                                resetButtonTitle: "Limpar Critério de Busca",
                                resetButtonAriaLabel: "Limpar Critério de Busca",
                                cancelButtonText: "Voltar",
                                cancelButtonAriaLabel: "Voltar",
                            },
                            startScreen: {
                                recentSearchesTitle: "Histórico de Busca",
                                noRecentSearchesText: "Sem histórico de busca",
                                saveRecentSearchButtonTitle: "Salvar no histórico de busca",
                                removeRecentSearchButtonTitle: "Remover do histórico de busca",
                                favoriteSearchesTitle: "Favoritos",
                                removeFavoriteSearchButtonTitle: "Remover dos Favoritos",
                            },
                            errorScreen: {
                                titleText: "Sonuçlar getirilemedi.",
                                helpText: "Verifique sua conexão com a internet e os recursos solicitados.",
                            },
                            footer: {
                                selectText: "Selecionar",
                                navigateText: "Ativar",
                                closeText: "Fechar",
                                searchByText: "Usamos Pesquisa",
                            },
                            noResultsScreen: {
                                noResultsText: "Nada foi encontrado para a sua consulta:",
                                suggestedQueryText: "Você pode tentar uma consulta diferente",
                                reportMissingResultsText: "Acha que esta consulta deveria retornar alguns resultados :> ?",
                                reportMissingResultsLinkText: "Contate-nos",
                            },
                        },
                    },
                },
                "/tr/": {
                    placeholder: "Arama",
                    translations: {
                        button: {
                            buttonText: "Ara",
                            buttonAriaLabel: "Ara",
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: "Arama filtresini temizle.",
                                resetButtonAriaLabel: "Arama Kriterlerini Temizle",
                                cancelButtonText: "Geri",
                                cancelButtonAriaLabel: "Geri",
                            },
                            startScreen: {
                                recentSearchesTitle: "Arama Geçmişi",
                                noRecentSearchesText: "Arama geçmişi yok",
                                saveRecentSearchButtonTitle: "Arama Geçmişine Kaydet",
                                removeRecentSearchButtonTitle: "Arama Geçmişinden Kaldır",
                                favoriteSearchesTitle: "Favoriler",
                                removeFavoriteSearchButtonTitle: "Favorilerden Kaldır",
                            },
                            errorScreen: {
                                titleText: "Sonuçları Getirme Başarısız Oldu",
                                helpText: "İnternet bağlantınızı ve bağlantı noktanızı kontrol edin.",
                            },
                            footer: {
                                selectText: "Seç",
                                navigateText: "Geçiş",
                                closeText: "Kapat",
                                searchByText: "Arama kullanıyoruz",
                            },
                            noResultsScreen: {
                                noResultsText: "Sorgunuz için hiçbir şey bulunamadı:",
                                suggestedQueryText: "Farklı bir sorgu deneyebilirsiniz",
                                reportMissingResultsText: "Bu sorgunun sonuç vermesi gerektiğini düşünüyor musunuz :> ?",
                                reportMissingResultsLinkText: "Bizimle iletişime geçin",
                            },
                        },
                    },
                },
                "/ar/": {
                    placeholder: "يبحث",
                    translations: {
                        button: {
                            buttonText: "يبحث",
                            buttonAriaLabel: "يبحث",
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: "مسح معايير البحث",
                                resetButtonAriaLabel: "مسح معايير البحث",
                                cancelButtonText: "رجوع",
                                cancelButtonAriaLabel: "رجوع",
                            },
                            startScreen: {
                                recentSearchesTitle: "سجل البحث",
                                noRecentSearchesText: "لا يوجد سجل بحث",
                                saveRecentSearchButtonTitle: "حفظ في سجل البحث",
                                removeRecentSearchButtonTitle: "إزالة من سجل البحث",
                                favoriteSearchesTitle: "المفضلة",
                                removeFavoriteSearchButtonTitle: "إزالة من المفضلة",
                            },
                            errorScreen: {
                                titleText: "فشل في الحصول على النتائج",
                                helpText: ".تحقق من اتصالك بالإنترنت والمورد المطلوب",
                            },
                            footer: {
                                selectText: "إختيار",
                                navigateText: "تبديل",
                                closeText: "إغلاق",
                                searchByText: "نحن نستخدم البحث",
                            },
                            noResultsScreen: {
                                noResultsText: "لم أتمكن من العثور على أي شيء لاستفسارك:",
                                suggestedQueryText: "يمكنك تجربة استفسار مختلف",
                                reportMissingResultsText: "هل تعتقد أن هذا الاستعلام يجب أن يؤدي إلى بعض النتائج :> ؟",
                                reportMissingResultsLinkText: "تواصل معنا",
                            },
                        },
                    },
                }, 
                "/jp/": {
                    placeholder: "検索",
                    translations: {
                        button: {
                            buttonText: "検索",
                            buttonAriaLabel: "検索",
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: "検索条件をクリア",
                                resetButtonAriaLabel: "検索条件をクリア",
                                cancelButtonText: "取り消し",
                                cancelButtonAriaLabel: "取り消し",
                            },
                            startScreen: {
                                recentSearchesTitle: "検索履歴",
                                noRecentSearchesText: "検索履歴なし",
                                saveRecentSearchButtonTitle: "検索履歴に保存",
                                removeRecentSearchButtonTitle: "検索履歴を削除",
                                favoriteSearchesTitle: "お気に入り",
                                removeFavoriteSearchButtonTitle: "お気に入りから削除",
                            },
                            errorScreen: {
                                titleText: "結果の取得に失敗",
                                helpText: "インターネット接続と要求されたリソースを確認してください。",
                            },
                            footer: {
                                selectText: "選択",
                                navigateText: "トグル",
                                closeText: "閉じる",
                                searchByText: "検索",
                            },
                            noResultsScreen: {
                                noResultsText: "お探しの情報は見つかりませんでした:",
                                suggestedQueryText: "別の質問を試してみてください",
                                reportMissingResultsText: "この質問は何らかの結果を生み出すと思いますか？ :> ?",
                                reportMissingResultsLinkText: "お問い合わせ",
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
                "/mx/": ["es-MX", "es-419", "es-AR", "es-BM", "es-BZ", "es-BO", "es-CL", "es-CO", "es-CR", "es-CU", "es-DO", "es-EC", "es-SV", "es-GT", "es-HN", "es-NI", "es-PA", "es-PY", "es-PE", "es-PR", "es-US", "es-UY", "es-VE"],
                "/vi/": ["vi-VN", "vi"],
                "/pt/": ["pt-PT", "pt-BR", "pt"],
                "/ko/": ["ko", "ko-KR"],
                "/tr/": ["tr-TR", "tr"],
                "/ar/": ["ar", "ar-MA", "ar-SA", "ar-PS", "ar-DZ", "ar-BH", "ar-TD", "ar-KM", "ar-JO", "ar-EG", "ar-IQ", "ar-KW", "ar-LB", "ar-LY", "ar-MR", "ar-OM", "ar-QA", "ar-SO", "ar-SD", "ar-SY", "ar-TN", "ar-AE", "ar-YE",],
                "/jp/": ["jp-JP", "jp"],
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


