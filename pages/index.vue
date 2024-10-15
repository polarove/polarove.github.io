<template>
    <div
        class="ma-auto xl:mt-30vh lg:mt-25vh md:mt-20vh sm:mt-15vh xs:mt-10vh lt-xs:mt-10vh">
        <transition-group name="fade-down" tag="section" class="text-center">
            <h1
                v-for="(key, index) of translateKeys"
                :key="index"
                :style="[{ 'transition-delay': `${index * 67}ms` }]"
                v-show="visible">
                {{ $t(key) }}
            </h1>
        </transition-group>
        <transition-group name="fade-in" tag="section" class="text-center">
            <Icon
                v-show="visible"
                v-for="(locale, index) of supportedLocale"
                :key="index"
                :name="locale.icon"
                class="text-6xl cursor-pointer hover:color-$primary"
                @click="$switchLocale(locale.code)"
                :class="
                    $getLocale() === locale.code
                        ? 'color-$primary'
                        : 'color-$inherit'
                "></Icon>
        </transition-group>
        <v-theme class="text-center" />
    </div>
</template>

<script lang="ts" setup>
import { en_US, zh_CN } from '~/constants'
const visible = ref(false)
setTimeout(() => (visible.value = true))
const supportedLocale = reactive([
    { ...zh_CN, icon: 'mdi:ideogram-chinese-japanese-korean-variant' },
    { ...en_US, icon: 'mdi:alphabetical-variant' }
])
const translateKeys = reactive(['hello', 'whoami'])
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
