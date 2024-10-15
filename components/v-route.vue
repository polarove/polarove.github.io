<template>
    <transition-group name="fade" tag="ul" class="p-0 position-relative">
        <li
            :key="index"
            v-for="(route, index) of routes"
            v-show="visible"
            class="inline-block mx-12 lt-sm:my-6"
            :style="[{ 'transition-delay': `${index * 67}ms` }]">
            <i18n-link
                class="decoration-none color-inherit hover:color-$primary"
                :aria-label="route.name"
                activeClass="color-$primary!"
                :to="route.path"
                :prefetch="true">
                <Icon :name="route.icon" class="text-6xl vertical-middle" />
                <div class="text-2xl">{{ route.name }}</div>
            </i18n-link>
        </li>
    </transition-group>
</template>

<script lang="ts" setup>
const visible = ref(false)
setTimeout(() => (visible.value = true))
const routes = [
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
    transition:
        transform 456ms,
        opacity 456ms;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(50%);
}
</style>
