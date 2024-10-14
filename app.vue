<template>
    <nuxt-page />
    <teleport to="body">
        <transition name="fade">
            <v-action-bar v-show="visible">
                <v-action-bar-item
                    class="mx-4 hover:transform"
                    style="
                        --un-translate-y: -20%;
                        --un-scale-x: 1.1;
                        --un-scale-y: 1.1;
                        --un-scale-z: 1.1;
                    "
                    v-for="(route, index) of routes">
                    <nuxt-link
                        class="decoration-none"
                        :to="route.path"
                        :prefetch="true"
                        :class="
                            route.path == $router.currentRoute.value.path
                                ? 'color-$primary'
                                : 'color-inherit'
                        ">
                        <Icon
                            :name="route.icon"
                            class="text-6xl h-100% vertical-middle" />
                    </nuxt-link>
                </v-action-bar-item>
            </v-action-bar>
        </transition>
    </teleport>
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
    transition: transform 0.5s;
}
.fade-enter-from,
.fade-leave-to {
    transform: translate3d(-50%, 100%, 0);
}
</style>
