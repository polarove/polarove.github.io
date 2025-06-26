<template>
	<v-layout :routes="routes">
		<v-card class="mt-32 ma-auto xl:w-45vw md:w-67vw sm:w-82vw lt-sm:w-82vw p-4">
			<h1 class="text-center">
				{{ $t('name') }}
			</h1>
			<p class="text-center">
				<span class="mx-1">{{ $t('gender') }}</span>/
				<span class="mx-1">{{ $t('age.value', { age: toYear(constants.birthday) }) }}</span>/
				<span class="mx-1">{{ $t('major.value') }}</span>/
				<span class="mx-1">{{ $t('education.value') }}</span>/
				<span class="mx-1">{{ $t('political.value') }}</span>
			</p>
			<p class="text-center">
				<span class="mx-1">{{ $t('working.time', { year: '2023-07' }) }}</span>
				<span class="mx-1">{{ $t('working.value', { value: toYear(constants.participate_in_work) }) }}</span>
			</p>
			<p class="text-center">
				<nuxt-link
					to="https://github.com/polarove"
					class="color-inherit"
				>
					<Icon
						name="mdi:github"
						class="text-3xl mx-2"
					/>
				</nuxt-link>
				<nuxt-link
					to="https://steamcommunity.com/id/AnibeRzzzz/"
					class="color-inherit"
				>
					<Icon
						name="mdi:steam"
						class="text-3xl mx-2"
					/>
				</nuxt-link>
				<nuxt-link
					to="https://space.bilibili.com/471857522"
					class="color-inherit"
				>
					<Icon
						name="pv:bilibili-filled"
						class="text-3xl mx-2 color-#fb7299"
					/>
				</nuxt-link>
			</p>
			<div class="position-absolute top-3 right-3 opacity-33 hover:opacity-100 cursor-pointer">
				<Icon
					name="mdi:download"
					class=" text-2xl vertical-mid"
				/>
				<span class="vertical-mid">{{ $t('pdf') }}</span>
			</div>
		</v-card>
		<v-card class="mt-8 ma-auto xl:w-45vw md:w-67vw sm:w-82vw lt-sm:w-82vw p-4">
			<h2>{{ $t('ability.index') }}</h2>
			<p>{{ $t('ability.p0') }}</p>
			<p>{{ $t('ability.p1') }}</p>
			<p>{{ $t('ability.p2') }}</p>
			<p>{{ $t('ability.p3', { experience: toYear(constants.participate_in_dotnet) }) }}</p>
			<p>{{ $t('ability.p4') }}</p>
			<p>
				{{ $t('ability.p5') }}
			</p>
			<p>
				{{ $t('ability.p6') }}
			</p>
			<p>{{ $t('ability.p7') }}</p>
			<p>{{ $t('ability.p8') }}</p>
		</v-card>
		<v-card class="mt-8 ma-auto xl:w-45vw md:w-67vw sm:w-82vw lt-sm:w-82vw p-4">
			<h2>{{ $t('frameworks.index') }}</h2>
			<p>{{ $t('frameworks.p0') }}</p>
			<p>{{ $t('frameworks.p1') }}</p>
			<p>{{ $t('frameworks.p2') }}</p>
			<p>{{ $t('frameworks.p3') }}</p>
			<p>{{ $t('frameworks.p4') }}</p>
		</v-card>
		<v-card class="my-8 ma-auto xl:w-45vw md:w-67vw sm:w-82vw lt-sm:w-82vw p-4">
			<h2>工作经验</h2>
			<v-card
				v-for="experience, index of workExperiences"
				:key="index"
				:class="[experience.incumbency ? 'b-[--primary]' : '']"
				class="py-4 px-6 hover:b-[--primary] cursor-pointer not-first:mt-4"
			>
				<div class="grid grid-cols-[3fr_3fr_3fr_3fr] items-center">
					<h2>
						<Icon
							v-if="experience.incumbency"
							name="mdi:star"
							class="text-2xl vertical-mid color-orange"
						/>
						<nuxt-link
							class="text-inherit decoration-none hover:color-[--primary] vertical-mid"
							:to="experience.url"
							target="_blank"
						>
							<span>{{ $t(experience.company) }}</span>
							<Icon name="mdi:arrow-top-right" />
						</nuxt-link>
					</h2>
					<h2 class="text-center">
						{{ experience.since }} - {{ experience.until }}
					</h2>
					<h2 class="text-center">
						{{ $t('company.total', { year: toYear(new Date(experience.since), new Date(experience.until)) }) }}
					</h2>
					<h2 class="text-end">
						{{ $t(experience.title) }}
					</h2>
				</div>
			</v-card>
		</v-card>
	</v-layout>
</template>

<script lang="ts" setup>
const { ts } = useI18n()
useSeoMeta({
	title: ts('title', { name: ts('name') }),
	description: ts('description')
})

const constants = {
	birthday: new Date('2001-11-16'),
	participate_in_work: new Date('2023-07-01'),
	participate_in_dotnet: new Date('2024-11-16')
}

// 重载签名
function toYear(since: Date, until?: Date): string

// 实现
function toYear(since: Date, until?: Date): string {
	if (until === undefined) {
		until = new Date() // 使用当前日期作为参考
	}

	// 确保 since <= until
	if (since > until) {
		[since, until] = [until, since] // 交换
	}

	const totalMonths = (until.getFullYear() - since.getFullYear()) * 12 + (until.getMonth() - since.getMonth())
	const yearDiff = totalMonths / 12

	return yearDiff.toFixed(1) // 保留 1 位小数
}

const workExperiences = [
	{
		company: 'company.p2.name',
		url: 'https://gtesim.cn',
		incumbency: true,
		title: 'company.p2.title',
		since: '2023/11',
		until: new Date().toLocaleDateString()
	},
	{
		company: 'company.p1.name',
		url: 'https://gtesim.cn',
		incumbency: false,
		title: 'company.p1.title',
		since: '2023/11',
		until: '2024/11'
	},
	{
		company: 'company.p0.name',
		url: 'http://fjrcsz.com/',
		incumbency: false,
		title: 'company.p0.title',
		since: '2023/06',
		until: '2023/07'
	}
]

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

<style scoped>
p {
	line-height: 1.75rem;
}
</style>
