<template>
    <section
        class="ma-auto xl:mt-30vh lg:mt-25vh md:mt-20vh sm:mt-15vh xs:mt-10vh lt-xs:mt-10vh text-center">
        <v-locale />
        <h1 class="text-center my-12">{{ $t('welcome') }}</h1>
        <v-route :routes="routes"> </v-route>
    </section>
</template>

<script lang="ts" setup>
const routes = [
    {
        path: '/',
        translateKey: 'mbti',
        icon: 'mdi:zodiac-scorpio'
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
.fade-down-enter-active,
.fade-down-leave-active {
    transition:
        transform 777ms,
        opacity 1s;
}
.fade-down-enter-from,
.fade-down-leave-to {
    opacity: 0;
    transform: translateY(-50%);
}

.fade-in-enter-active,
.fade-in-leave-active {
    transition: opacity 1s;
}
.fade-in-enter-from,
.fade-in-leave-to {
    opacity: 0;
}
</style>
