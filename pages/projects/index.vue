<template>
	<v-layout :routes="routes">
		<div class="h-200vh mt-24 px-7 transform">
			<span
				v-for="i of 1000"
				:key="i"
			>
				{{ i }}content
			</span>
		</div>
	</v-layout>
</template>

<script lang="ts" setup>
const { t } = useI18n()
useSeoMeta({
	title: t('title', { name: t('name') as string }) as string,
	description: t('description') as string
})
const routes = [
	{
		path: '/',
		translateKey: 'home',
		icon: 'mdi:home'
	},
	{
		path: '/resume',
		translateKey: 'resume',
		icon: 'mdi:script-text'
	},
	{
		path: '/projects',
		translateKey: 'project',
		icon: 'mdi:file-code-outline'
	},
	{
		path: '/articles',
		translateKey: 'article',
		icon: 'mdi:file-document-edit-outline'
	}
]
</script>

<style lang="scss" scoped></style>
