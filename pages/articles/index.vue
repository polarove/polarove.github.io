<template>
    <v-layout :routes="routes">
        <main class="p-24 w-45vw ma-auto">
            <div>hi</div>
            <v-button>press me</v-button>
        </main>
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
