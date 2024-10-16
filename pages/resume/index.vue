<template>
    <div>
        <v-route
            :routes="routes"
            style="
                --icon-xl: 2rem;
                --icon-lg: 1.75rem;
                --icon-md: 1.5rem;
                --icon-sm: 1.25rem;
                --icon-lt-sm: 1rem;
            " />
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
