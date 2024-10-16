import { en_US, zh_CN } from './constants'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    css: [
        'assets/css/normalize.css',
        'assets/css/scrollbar.css',
        'assets/css/theme/var.css',
        'assets/css/theme/dark.css',
        'assets/css/theme/light.css',
        'assets/css/theme/sephia.css'
    ],
    modules: [
        '@nuxt/icon',
        '@unocss/nuxt',
        '@nuxtjs/color-mode',
        'nuxt-i18n-micro',
        '@nuxt/content'
    ],
    colorMode: {
        classSuffix: '',
        classPrefix: '',
        fallback: 'system',
        preference: 'system'
    },
    i18n: {
        locales: [zh_CN, en_US],
        defaultLocale: zh_CN.code,
        translationDir: 'locales',
        meta: true,
        localeCookie: 'accept-language'
    },
    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://font.sec.miui.com/font/css?family=MiSans:300,400,500,600,700:Chinese_Simplify,Chinese_Traditional,Latin&display=swap'
                }
            ]
        }
    }

    // usage: https://unocss.dev/integrations/nuxt#configuration
    // unocss: {
    // 	nuxtLayers: true
    // }
})
