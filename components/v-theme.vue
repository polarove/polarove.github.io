<template>
    <ul class="p-0">
        <li v-for="(theme, index) of themes" class="inline-block mx-12">
            <Icon
                :name="theme.icon"
                class="text-8xl cursor-pointer hover:color-$primary"
                :class="{
                    'color-$primary': $colorMode.preference === theme.name
                }"
                @click="$colorMode.preference = theme.name" />
        </li>
    </ul>
</template>

<script lang="ts" setup>
const themes = [
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
]
</script>

<style scoped></style>
