<template>
    <v-route
        :routes="routes"
        class="fixed z-999 bg-[--background-page-light] top-0 w-100vw lt-sm:flex lt-sm:justify-between lt-sm:items-center transition-all-200 my-0 drop-shadow-xl"
        style="
            --px: 2rem;
            --py: 0.5rem;
            --icon-xl: 2rem;
            --icon-lg: 1.75rem;
            --icon-md: 1.5rem;
            --icon-sm: 1.5rem;
            --icon-lt-sm: 1.5rem;
        " />
    <div class="h-200vh mt-24 px-7 transform">
        <span v-for="i of 1000"> {{ i }}content </span>
    </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()
useSeoMeta({
    title: t('title') as string
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
