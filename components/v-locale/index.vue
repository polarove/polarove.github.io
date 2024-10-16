<template>
    <Icon
        v-for="(locale, index) of supportedLocale"
        :key="index"
        :name="locale.icon"
        class="text-6xl cursor-pointer hover:color-$primary"
        @click="$switchLocale(locale.code)"
        :class="
            $getLocale() === locale.code ? 'color-$primary' : 'color-$inherit'
        "></Icon>
</template>

<script lang="ts" setup>
import { en_US, zh_CN } from '~/constants'
const supportedLocale = [
    { ...zh_CN, icon: 'mdi:ideogram-chinese-japanese-korean-variant' },
    { ...en_US, icon: 'mdi:alphabetical-variant' }
]
</script>

<style lang="scss" scoped></style>
