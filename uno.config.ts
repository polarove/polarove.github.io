// unocss.config.ts
import { defineConfig, presetAttributify, presetUno, presetIcons } from 'unocss'

export default defineConfig({
	theme: {
		// reference: https://element-plus.org/zh-CN/component/layout.html#col-attributes
		breakpoints: {
			xs: '576px',
			sm: '768px',
			md: '992px',
			lg: '1200px',
			xl: '1920px'
		}
	},
	// 以下配置是为了可以在组件中更方便地使用图标<el-button icon="i-ep-lock"/>
	// 需要安装来自iconify-json/icon-set-name的图标才行, 如 iconify-json/ep
	variants: [
		{
			match: (s: string) => {
				if (s.startsWith('i-')) {
					return {
						matcher: s,
						selector: (s: string) => {
							return s.startsWith('.') ? `${s.slice(1)},${s}` : s
						}
					}
				}
			}
		}
	],
	rules: [
		[
			'display-none',
			{
				display: 'none'
			}
		],
		[
			'display-block',
			{
				display: 'block'
			}
		]
	],
	presets: [
		// 预设规则
		presetUno(),
		// before: class="text-2xl font-bold"
		// after: text="bold 2xl"
		presetAttributify(),
		// class="i-iconset:iconname"
		presetIcons({
			extraProperties: {
				'display': 'inline-block',
				'vertical-align': 'middle'
			}
		})
	]
})
