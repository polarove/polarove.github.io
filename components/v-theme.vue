<template>
    <transition-group name="fade" tag="ul" class="p-0 position-relative">
        <li
            :key="index"
            v-for="(theme, index) of themes"
            v-show="visible"
            class="inline-block mx-12 lt-sm:my-6"
            :style="[{ 'transition-delay': `${index * 67}ms` }]">
            <Icon
                :name="theme.icon"
                class="text-8xl cursor-pointer hover:color-$primary"
                :class="{
                    'color-$primary': $colorMode.preference === theme.name
                }"
                @click="$colorMode.preference = theme.name" />
        </li>
    </transition-group>
</template>

<script lang="ts" setup>
const visible = ref(false)
setTimeout(() => (visible.value = true))
const themes = reactive<{ name: string; icon: string }[]>([
    {
        name: 'light',
        icon: 'mdi:white-balance-sunny'
    },
    {
        name: 'dark',
        icon: 'mdi:weather-night'
    },
    {
        name: 'sephia',
        icon: 'mdi:palette'
    },
    {
        name: 'system',
        icon: 'mdi:monitor'
    }
])
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
