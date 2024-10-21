<template>
	<v-layout :routes="routes">
		<v-card class="mt-32 ma-auto xl:w-45vw md:w-67vw sm:w-82vw lt-sm:w-82vw p-12 article-md">
			<nuxt-link
				to=".."
			>
				<Icon
					name="mdi:arrow-left-bold"
					class="text-3xl"
				/>
			</nuxt-link>
			<content-doc>
				<template #not-found>
					<div class="text-center">
						No documents found
					</div>
				</template>
			</content-doc>
		</v-card>
	</v-layout>
</template>

<script lang="ts" setup>
const { ts } = useI18n()
useSeoMeta({
	title: ts('title', { name: ts('name') }),
	description: ts('description')
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

<style>
.article-md {
	a {
		text-decoration: none;
		color: var(--primary);
		&:hover{
			color: var(--primary-light);
		}
	}
	li {
		line-height: 2rem;
	}
}
</style>
