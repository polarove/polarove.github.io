<template>
    <transition-group name="fade" tag="ul" class="p-0 position-relative">
        <li
            class="inline-block mx-12 lt-sm:my-6 text-center"
            v-show="visible"
            :key="index"
            :style="[{ 'transition-delay': `${index * 67}ms` }]"
            v-for="(route, index) of routes">
            <i18n-link
                class="decoration-none color-inherit hover:color-$primary"
                :aria-label="$t(route.translateKey)"
                activeClass="color-$primary!"
                :to="route.path"
                :prefetch="true">
                <Icon :name="route.icon" class="text-6xl vertical-middle" />
                <div class="text-2xl">{{ $t(route.translateKey) }}</div>
            </i18n-link>
        </li>
    </transition-group>
</template>

<script lang="ts" setup>
import type { IRoute } from './types'

const visible = ref(false)
setTimeout(() => (visible.value = true))

defineProps<{ routes: IRoute[] }>()
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
