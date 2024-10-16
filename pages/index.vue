<template>
    <section
        class="ma-auto xl:mt-30vh lg:mt-25vh md:mt-20vh sm:mt-15vh xs:mt-10vh lt-xs:mt-10vh text-center">
        <v-locale
            style="
                --text-xl: 4rem;
                --text-lg: 3.5rem;
                --text-md: 3.25rem;
                --text-sm: 3rem;
                --text-lt-sm: 2.75rem;
            " />
        <h1 class="text-center my-12">{{ $t('welcome') }}</h1>
        <v-route
            :routes="routes"
            style="
                --text-xl: 1.5rem;
                --text-lg: 1.4rem;
                --text-md: 1.3rem;
                --text-sm: 1.2rem;
                --text-lt-sm: 1.1rem;
                --icon-xl: 3rem;
                --icon-lg: 2.75rem;
                --icon-md: 2.5rem;
                --icon-sm: 2.25rem;
                --icon-lt-sm: 2rem;
            ">
        </v-route>
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
