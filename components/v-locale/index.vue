<template>
	<Icon
		v-for="(locale, index) of supportedLocale"
		:key="index"
		:name="locale.icon"
		class="cursor-pointer hover:color-$primary xl:text-size-$text-xl lg:text-size-$text-lg md:text-size-$text-md sm:text-size-$text-sm lt-sm:text-size-$text-lt-sm"
		:class="
			getLocale() === locale.code ? 'color-$primary' : 'color-$inherit'
		"
		@click="switchLocale(locale.code)"
	/>
</template>

<script lang="ts" setup>
import { en_US, zh_CN } from '~/constants'

const { getLocale, switchLocale } = useI18n()

const supportedLocale = [
	{ ...zh_CN, icon: 'mdi:ideogram-chinese-japanese-korean-variant' },
	{ ...en_US, icon: 'mdi:alphabetical-variant' }
]
</script>

<style lang="scss" scoped></style>
