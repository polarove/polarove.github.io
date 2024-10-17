# days

translated in English

```typescript
const { t, localePath } = useI18n()
useSeoMeta({
	title: t('title', { name: t('name') as string }) as string,
	description: t('description') as string
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
```

