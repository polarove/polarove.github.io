<template>
    <v-action-bar
        v-show="visible"
        class="position-absolute bottom-0 left-50% transform shadow"
        style="--un-translate-x: -50%; --un-shadow-color: rgba(0, 0, 0, 0.33)">
        <v-action-bar-item
            class="mx-4"
            v-for="(theme, index) of themes"
            :key="index">
            <Icon
                :name="theme.icon"
                class="text-6xl cursor-pointer hover:color-$primary"
                :class="{
                    'color-$primary': $colorMode.preference === theme.name
                }"
                @click="$colorMode.preference = theme.name" />
        </v-action-bar-item>
    </v-action-bar>
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
    transition: transform 456ms;
}
.fade-enter-from,
.fade-leave-to {
    transform: translate3d(-50%, 200%, 0);
}
</style>
