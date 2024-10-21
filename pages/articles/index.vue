<template>
	<v-layout :routes="routes">
		<main class="p-24 w-45vw ma-auto">
			<div
				v-for="(directory, index) of menu"
				:key="index"
			>
				<nuxt-link
					class="color-inherit decoration-none text-4xl py-4 block hover:color-[--primary]"
					:to="directory._path"
				>
					{{ directory.title }}
				</nuxt-link>
				<nuxt-link
					v-for="(link, i) of directory.children?.filter(
						(i) => i._path !== directory._path
					)"
					:key="i"
					class="color-inherit decoration-none block hover:color-[--primary] hover:bg-[--background-page-light] py-2 px-4 rounded"
					:to="link._path"
				>
					{{ link.title }}
				</nuxt-link>
			</div>
		</main>
	</v-layout>
</template>

<script lang="ts" setup>
const { ts, localePath } = useI18n()
useSeoMeta({
	title: ts('title', { name: ts('name') }),
	description: ts('description')
})
const { data: navigation } = await useAsyncData('fetchContentNavigation', () =>
	fetchContentNavigation()
)

const menu = computed(() => {
	const languageLevel = navigation.value?.filter(item =>
		localePath(useRouter().currentRoute.value.path).startsWith(item._path)
	)
	if (languageLevel == null || languageLevel.length <= 0) return []
	const documents = languageLevel[0]
	return documents.children == null ? [] : documents.children[0].children
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
