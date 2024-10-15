<template>
    <nuxt-page />

    <transition name="fade">
        <v-action-bar
            v-show="visible"
            class="position-absolute bottom-0 left-50% transform"
            style="--un-translate-x: -50%">
            <v-action-bar-item
                class="mx-4 hover:transform"
                style="
                    --un-translate-y: -20%;
                    --un-scale-x: 1.1;
                    --un-scale-y: 1.1;
                    --un-scale-z: 1.1;
                "
                v-for="(route, index) of routes"
                :key="index">
                <i18n-link
                    class="decoration-none color-inherit"
                    :to="route.path"
                    activeClass="color-$primary!"
                    :prefetch="true">
                    <Icon
                        :name="route.icon"
                        class="text-6xl h-100% vertical-middle" />
                </i18n-link>
            </v-action-bar-item>
        </v-action-bar>
    </transition>
</template>

<script setup lang="ts">
const visible = ref(false)
setTimeout(() => (visible.value = true))
const routes: {
    path: string
    name: string
    icon: string
}[] = [
    {
        path: '/',
        name: '主页',
        icon: 'mdi:zodiac-scorpio'
    },
    {
        path: '/resume',
        name: '简历',
        icon: 'mdi:script-text'
    },
    {
        path: '/projects',
        name: '项目',
        icon: 'mdi:file-code-outline'
    },
    {
        path: '/components',
        name: '组件',
        icon: 'mdi:apps'
    }
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: transform 456ms;
}
.fade-enter-from,
.fade-leave-to {
    transform: translate3d(-50%, 200%, 0);
}
</style>
