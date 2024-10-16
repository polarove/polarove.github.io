<template>
    <transition-group
        name="fade"
        tag="ul"
        class="p-0">
        <li
            class="inline-block text-center px-$px py-$py"
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
                <Icon
                    :name="route.icon"
                    class="vertical-middle xl:text-size-$icon-xl lg:text-size-$icon-lg md:text-size-$icon-md sm:text-size-$icon-sm lt-sm:text-size-$icon-lt-sm" />
                <div
                    class="lh-8 xl:text-size-$text-xl lg:text-size-$text-lg md:text-size-$text-md sm:text-size-$text-sm lt-sm:text-size-$text-lt-sm">
                    {{ $t(route.translateKey) }}
                </div>
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
