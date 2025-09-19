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
				<span class="mx-1">{{ $t('career.since', { year: '2023-07' }) }}</span>/
				<span class="mx-1">{{ $t('career.value', { value: toYear(constants.participate_in_work) }) }}</span>/
				<span class="mx-1">{{ $t('field.value', { value: toYear(constants.participate_in_work) }) }}</span>
			</p>
			<p class="text-center">
				<nuxt-link
					to="https://github.com/polarove"
					class="color-inherit hover:color-[--primary]"
				>
					<Icon
						name="mdi:github"
						class="text-3xl mx-2"
					/>
				</nuxt-link>
				<nuxt-link
					to="https://steamcommunity.com/id/AnibeRzzzz/"
					class="color-inherit hover:color-[--primary]"
				>
					<Icon
						name="mdi:steam"
						class="text-3xl mx-2"
					/>
				</nuxt-link>
				<nuxt-link
					to="mailto:liuqi6602@163.com"
					class="color-inherit cursor-pointer hover:color-[--primary]"
				>
					<Icon
						name="mdi:email"
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
			<h1>{{ $t('abilities.index') }}</h1>
			<h2>{{ $t('abilities.p0.brief') }}</h2>
			<p>{{ $t('abilities.p0.detail') }}</p>
			<h2>{{ $t('abilities.p1.brief') }}</h2>
			<p>{{ $t('abilities.p1.detail') }}</p>
		</v-card>
		<v-card class="mt-4 ma-auto xl:w-45vw md:w-67vw sm:w-82vw lt-sm:w-82vw p-4">
			<h2>{{ $t('abilities.p2.brief') }}</h2>
			<p>{{ $t('abilities.p2.detail', { experience: toYear(constants.participate_in_dotnet) }) }}</p>
			<h2>{{ $t('abilities.p3.brief') }}</h2>
			<p>{{ $t('abilities.p3.detail') }}</p>
		</v-card>
		<v-card class="mt-4 ma-auto xl:w-45vw md:w-67vw sm:w-82vw lt-sm:w-82vw p-4">
			<h2>{{ $t('abilities.p4.brief') }}</h2>
			<p>{{ $t('abilities.p4.detail') }}</p>
			<h2>{{ $t('abilities.p5.brief') }}</h2>
			<p>
				{{ $t('abilities.p5.detail') }}
			</p>
			<h2>{{ $t('abilities.p6.brief') }}</h2>
			<p>
				{{ $t('abilities.p6.detail') }}
			</p>
			<h2>{{ $t('abilities.p7.brief') }}</h2>
			<p>{{ $t('abilities.p7.detail') }}</p>
		</v-card>
		<v-card class="mt-4 ma-auto xl:w-45vw md:w-67vw sm:w-82vw lt-sm:w-82vw p-4">
			<h2>{{ $t('abilities.p8.brief') }}</h2>
			<p>{{ $t('abilities.p8.detail') }}</p>
		</v-card>
		<v-card class="mt-8 ma-auto xl:w-45vw md:w-67vw sm:w-82vw lt-sm:w-82vw p-4">
			<h1>{{ $t('frameworks.index') }}</h1>
			<h3>{{ $t('frameworks.subtitle') }}</h3>
			<p class="flex items-center text-[--primary]">
				<Icon
					name="mdi:star"
					class="text-2xl color-orange mr-1"
				/>
				<span>{{ $t('frameworks.p0') }}</span>
			</p>
			<p class="flex items-center text-[--primary]">
				<Icon
					name="mdi:star"
					class="text-2xl color-orange mr-1"
				/>{{ $t('frameworks.p1') }}
			</p>
			<p>{{ $t('frameworks.p2') }}</p>
			<p>{{ $t('frameworks.p3') }}</p>
			<p>{{ $t('frameworks.p4') }}</p>
			<p>{{ $t('frameworks.p5') }}</p>
			<p>{{ $t('frameworks.p6') }}</p>
			<p>{{ $t('frameworks.p7') }}</p>
		</v-card>
		<v-card class="my-8 ma-auto xl:w-45vw md:w-67vw sm:w-82vw lt-sm:w-82vw p-4">
			<h1>{{ $t('projects.index') }}</h1>
			<v-card
				v-for="project, index of projects"
				:key="index"
				class="py-4 px-6 hover:b-[--primary] cursor-pointer not-first:mt-4"
				:class="[project.incumbency && 'b-[--primary]', project.incumbency && 'text-[--primary]', project.incumbency && 'font-bold']"
			>
				<div class="grid grid-cols-[3fr_3fr_3fr] items-center">
					<div>
						<Icon
							v-if="project.incumbency"
							name="mdi:star"
							class="text-2xl vertical-mid color-orange mr-1"
						/>
						<span class="text-center vertical-mid text-lg">
							{{ $t('projects.total', { month: toMonth(new Date(project.since), new Date(project.until)) }) }}
						</span>
						<nuxt-link
							class="block text-inherit decoration-none hover:color-[--primary] vertical-mid"
							:to="project.link"
							target="_blank"
						>
							<span>{{ $t(project.name) }}</span>
							<Icon name="mdi:arrow-top-right" />
						</nuxt-link>
					</div>
					<span class="text-center">
						{{ project.since }} - {{ project.until }}
					</span>
					<span class="text-end py-1">
						{{ $t(project.title) }}
					</span>
				</div>
			</v-card>
		</v-card>
		<v-card class="my-8 ma-auto xl:w-45vw md:w-67vw sm:w-82vw lt-sm:w-82vw p-4">
			<h1>{{ $t('companies.index') }}</h1>
			<v-card
				v-for="career, index of careers"
				:key="index"
				:class="[career.incumbency && 'b-[--primary]', career.incumbency && 'text-[--primary]', career.incumbency && 'font-bold']"
				class="py-4 px-6 hover:b-[--primary] cursor-pointer not-first:mt-4"
			>
				<div class="grid grid-cols-[3fr_3fr_3fr] items-center">
					<div>
						<Icon
							v-if="career.incumbency"
							name="mdi:star"
							class="text-2xl vertical-mid color-orange mr-1"
						/>
						<span class="text-center vertical-mid text-lg">
							{{ $t('companies.total', { year: toYear(new Date(career.since), new Date(career.until)) }) }}
						</span>
						<nuxt-link
							class="block my-2 text-inherit decoration-none hover:color-[--primary] vertical-mid"
							:to="career.link"
							target="_blank"
						>
							<span>{{ $t(career.companies) }}</span>
							<Icon name="mdi:arrow-top-right" />
						</nuxt-link>
					</div>
					<span class="text-center">
						{{ career.since }} - {{ career.until }}
					</span>
					<span class="text-end">
						{{ $t(career.position) }}
					</span>
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
	participate_in_dotnet: new Date('2024-08-01')
}

// 实现
function toYear(since: Date, until?: Date): string {
	const totalMonths = toMonthGap(since, until)
	const yearDiff = totalMonths / 12
	return yearDiff.toFixed(1) // 保留 1 位小数
}

// 实现
function toMonth(since: Date, until?: Date): string {
	return toMonthGap(since, until).toString()
}

// 实现
function toMonthGap(since: Date, until?: Date) {
	if (until === undefined) {
		until = new Date() // 使用当前日期作为参考
	}

	// 确保 since <= until
	if (since > until) {
		[since, until] = [until, since] // 交换
	}

	return (until.getFullYear() - since.getFullYear()) * 12 + (until.getMonth() - since.getMonth())
}

const careers = [
	{
		companies: 'companies.p2.name',
		link: 'https://gtesim.cn',
		incumbency: true,
		position: 'companies.p2.position',
		since: '2024/08',
		until: new Date().toLocaleDateString()
	},
	{
		companies: 'companies.p1.name',
		link: 'https://gtesim.cn',
		incumbency: false,
		position: 'companies.p1.position',
		since: '2023/11',
		until: '2024/08'
	},
	{
		companies: 'companies.p0.name',
		link: 'http://fjrcsz.com/',
		incumbency: false,
		position: 'companies.p0.position',
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

const projects = [
	{
		name: 'projects.p0.name',
		title: 'projects.p0.title',
		companies: 'projects.p0.companies',
		since: '2025/07',
		until: new Date().toLocaleDateString(),
		link: 'https://www.gtesim.com',
		incumbency: true
	},
	{
		name: 'projects.p1.name',
		title: 'projects.p1.title',
		companies: 'projects.p1.companies',
		since: '2024/08',
		until: '2025/07',
		link: 'https://gt-admin.gtesim.cn',
		incumbency: false
	},
	{
		name: 'projects.p2.name',
		title: 'projects.p2.title',
		companies: 'projects.p2.companies',
		since: '2024/04',
		until: '2024/08',
		link: 'https://redeem.gtesim.com',
		incumbency: false
	},
	{
		name: 'projects.p3.name',
		title: 'projects.p3.title',
		companies: 'projects.p3.companies',
		since: '2023/11',
		until: '2024/04',
		link: 'https://gtesim.cn',
		incumbency: false
	}
]
</script>

<style scoped>
p {
	line-height: 1.75rem;
}
</style>
