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
        'nuxt-i18n-micro'
    ],
    colorMode: {
        classSuffix: '',
        classPrefix: '',
        fallback: 'system',
        preference: 'system'
    },
    i18n: {
        locales: [
            { code: 'zh', iso: 'zh-CN', dir: 'ltr', displayName: '简体中文' },
            { code: 'en', iso: 'en-US', dir: 'ltr', displayName: 'English' }
        ],
        defaultLocale: 'zh',
        translationDir: 'locales',
        meta: true
    }

    // usage: https://unocss.dev/integrations/nuxt#configuration
    // unocss: {
    // 	nuxtLayers: true
    // }
})
