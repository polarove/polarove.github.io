import { en_US, zh_CN } from './constants'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/icon',
		'@unocss/nuxt',
		'@nuxtjs/color-mode',
		'nuxt-i18n-micro',
		'@nuxt/eslint'
	],
	devtools: { enabled: true },
	app: {
		head: {
			link: [
				{
					rel: 'stylesheet',
					href: 'https://font.sec.miui.com/font/css?family=MiSans:300,400,500,600,700:Chinese_Simplify,Chinese_Traditional,Latin&display=swap'
				}
			]
		}
	},
	css: [
		'assets/css/normalize.css',
		'assets/css/scrollbar.css',
		'assets/css/theme/var.css',
		'assets/css/theme/dark.css',
		'assets/css/theme/light.css'
	],
	colorMode: {
		classSuffix: '',
		classPrefix: '',
		fallback: 'system',
		preference: 'system'
	},

	experimental: {
		defaults: {
			// https://nuxt.com/docs/api/components/nuxt-link#nuxtlink
			nuxtLink: {
				trailingSlash: 'remove' // can be 'append' or 'remove'
			}
		}
	},
	compatibilityDate: '2024-04-03',
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: false,
				quotes: 'single',
				commaDangle: 'never'
			}
		}
	},
	i18n: {
		locales: [zh_CN, en_US],
		defaultLocale: zh_CN.code,
		translationDir: 'locales',
		meta: true,
		localeCookie: 'accept-language',
		includeDefaultLocaleRoute: true
	},
	icon: {
		customCollections: [
			{
				prefix: 'pv',
				dir: './assets/icons'
			}
		]
	}
	// usage: https://unocss.dev/integrations/nuxt#configuration
	// unocss: {
	// 	nuxtLayers: true
	// }
})
