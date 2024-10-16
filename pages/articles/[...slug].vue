<template>
    <v-layout :routes="routes">
        <main class="mt-24 px-7">
            <content-doc>
                <template #not-found>
                    <div class="text-center">No documents found</div>
                </template>
            </content-doc>
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
