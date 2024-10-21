<template>
	<v-layout :routes="routes">
		<v-card class="mt-32 ma-auto xl:w-45vw md:w-67vw sm:w-89vw lt-sm:w-89vw p-4">
			<h1 class="text-center">
				{{ t('name') }}
			</h1>
			<p class="text-center">
				<span class="mx-1">{{ t('gender') }}</span>/
				<span class="mx-1">{{ t('age.value', { age: calculateYear(BIRTHDAY) }) }}</span>/
				<span class="mx-1">{{ t('major.value') }}</span>/
				<span class="mx-1">{{ t('education.value') }}</span>/
				<span class="mx-1">{{ t('political.value') }}</span>
			</p>
			<p class="text-center">
				<span class="mx-1">{{ t('working.time', { year: '2023-07' }) }}</span>
				<span class="mx-1">{{ t('working.value', { value: calculateYear(PARTICIPATE_IN_WORK) }) }}</span>
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
				<span class="vertical-mid">{{ t('pdf') }}</span>
			</div>
		</v-card>
		<v-card class="mt-8 ma-auto xl:w-45vw md:w-67vw sm:w-89vw lt-sm:w-89vw p-4">
			<h2>{{ t('ability.index') }}</h2>
			<p>{{ t('ability.p0') }}</p>
			<p>{{ t('ability.p1') }}</p>
			<div class="md:flex justify-between lt-md:grid lt-md:grid-cols-[2fr_2fr] lt-md:gap-4">
				<nuxt-link
					v-for="project, index of exmapleProjects"
					:key="index"
					class="inline-block flex-1 text-inherit decoration-none md:mx-4"
					:to="project.url"
					target="_blank"
				>
					<v-card
						class="b-solid py-4 px-6 hover:b-[--primary] cursor-pointer"
					>
						<Icon
							name="mdi:web"
							class="vertical-mid text-xl mr-1"
						/>
						<span class="vertical-mid"> {{ t(project.translateKey) }} </span>
						<Icon name="mdi:arrow-top-right" />
					</v-card>
				</nuxt-link>
			</div>
			<p>{{ t('ability.p2') }}</p>
			<p>{{ t('ability.p3') }}</p>
			<p>{{ t('ability.p4') }}</p>
			<p>{{ t('ability.p5') }}</p>
			<nuxt-link
				class="inline-block flex-1 text-inherit decoration-none md:mx-4"
				to="https://api.warframe.team/swagger/index.html"
				target="_blank"
			>
				<v-card
					class=" py-4 px-6 hover:b-[--primary] cursor-pointer"
				>
					<span> Swagger page </span>
					<Icon name="mdi:arrow-top-right" />
				</v-card>
			</nuxt-link>
			<p>
				<span>{{ t('ability.p6') }}&ensp;</span><nuxt-link
					class="color-inherit hover:color-[--primary]"
					to="http://warframe.team:8080/"
				>Jenkins<Icon name="mdi:arrow-top-right" />
				</nuxt-link> / <nuxt-link
					class="color-inherit hover:color-[--primary]"
					to="https://coding.net/"
				>Tencent Coding<Icon name="mdi:arrow-top-right" />
				</nuxt-link>
			</p>
			<p>
				<span>{{ t('ability.p7.seg0') }}</span>&ensp;<nuxt-link
					class="color-inherit hover:color-[--primary]"
					to="https://developer.android.google.cn/courses/pathways/compose"
				>Jetpack compose<Icon name="mdi:arrow-top-right" />
				</nuxt-link>&ensp;<span>{{ t('ability.p7.seg1') }}</span>
			</p>
			<p>{{ t('ability.p8') }}</p>
			<div class="md:flex justify-between lt-md:grid lt-md:grid-cols-[2fr_2fr] lt-md:gap-4">
				<nuxt-link
					v-for="project, index of opensourceProjects"
					:key="index"
					class="inline-block flex-1 text-inherit decoration-none md:mx-4"
					:to="project.url"
					target="_blank"
				>
					<v-card
						:class="[index != 0 && index!=exmapleProjects.length ? 'mx-4' : '']"
						class="py-4 px-6 hover:b-[--primary] cursor-pointer"
					>
						<Icon
							name="mdi:github"
							class="vertical-mid text-xl mr-2"
						/>
						<span class="vertical-mid"> {{ project.translateKey }} </span>
						<Icon name="mdi:arrow-top-right" />
					</v-card>
				</nuxt-link>
			</div>
		</v-card>
		<v-card class="my-8 ma-auto xl:w-45vw md:w-67vw sm:w-89vw lt-sm:w-89vw p-4">
			<h2>工作经历</h2>
			<v-card
				v-for="experience, index of workExperiences"
				:key="index"
				:class="[experience.incumbency ? 'b-[--primary]' : '']"
				class="py-4 px-6 hover:b-[--primary] cursor-pointer not-first:mt-4"
			>
				<div class="grid grid-cols-[3fr_3fr_3fr] items-center">
					<h2>
						<nuxt-link
							class="text-inherit decoration-none hover:color-[--primary]"
							:to="experience.url"
							target="_blank"
						>
							<span>{{ t(experience.company) }}</span><Icon name="mdi:arrow-top-right" />
						</nuxt-link>
					</h2>
					<h2 class="text-center">
						{{ experience.start }} - {{ experience.until }}
					</h2>
					<h2 class="text-end">
						{{ t(experience.position) }}
					</h2>
				</div>
			</v-card>
		</v-card>
	</v-layout>
</template>

<script lang="ts" setup>
const { t } = useI18n()
useSeoMeta({
	title: t('title', { name: t('name') as string }) as string,
	description: t('description') as string
})

const BIRTHDAY = new Date('2001-11-16')
const PARTICIPATE_IN_WORK = new Date('2023-07-01')
const calculateYear = (target: Date) => {
	const now = new Date()

	const targetYear = target.getFullYear()
	const targetMonth = target.getMonth()
	const currentYear = now.getFullYear()
	const currentMonth = now.getMonth()
	const monthDifference = (currentYear - targetYear) * 12 + (currentMonth - targetMonth)
	return (monthDifference / 12).toFixed(1)
}

const exmapleProjects = [
	{
		translateKey: 'ability.project.warframe-team',
		url: 'https://warframe.team'
	},
	{
		translateKey: 'ability.project.fissure-clock',
		url: 'http://warframe.team:3001'
	},
	{
		translateKey: 'ability.project.yaoren',
		url: 'http://warframe.team:3002'
	},
	{
		translateKey: 'ability.project.stylized',
		url: 'http://warframe.team:4001'
	}
]

const opensourceProjects = [
	{
		translateKey: 'cz-translated-changelog',
		url: 'https://github.com/polarove/cz-translated-changelog-zh-cn'
	},
	{
		translateKey: 'cz-translated-lint',
		url: 'https://github.com/polarove/translated-lint-zh-cn'
	}
]

const workExperiences = [
	{
		company: 'ability.company.tukun',
		url: 'https://gtesim.cn',
		incumbency: true,
		position: 'ability.position.Front-end-engineer',
		start: '2023/11',
		until: 'Now'
	},
	{
		company: 'ability.company.renshu',
		url: 'http://fjrcsz.com/',
		incumbency: false,
		position: 'ability.position.Java-engineer',
		start: '2023/06',
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
