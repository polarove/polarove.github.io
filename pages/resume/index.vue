<template>
    <div>
        <v-route :routes="routes" />
    </div>
</template>

<script lang="ts" setup>
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
