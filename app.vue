<template>
    <nuxt-page />

    <div
        class="position-fixed bottom-0 left-50% transform flex"
        style="--un-translate-x: -50%; --un-translate-y: -20%">
        <transition name="fade">
            <v-action-bar-theme
                v-show="visible && scroll < THRESHOLD"
                class="py-1 mx-2 flex" />
        </transition>

        <transition name="fade">
            <v-action-bar-locale
                class="py-1 mx-2 flex items-center"
                style="transition-delay: 67ms"
                v-show="!IsIndexPage && visible && scroll < THRESHOLD" />
        </transition>
    </div>
</template>

<script setup lang="ts">
const visible = ref(false)
setTimeout(() => (visible.value = true))
const THRESHOLD = 64
const { localePath, getLocale } = useI18n()
const router = useRouter()
const IsIndexPage = computed(
    () =>
        localePath('/') == router.currentRoute.value.path.concat(getLocale()) ||
        localePath('/') == router.currentRoute.value.path
)
const { scroll } = useWindowScroll()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: transform 456ms;
}
.fade-enter-from,
.fade-leave-to {
    transform: translate3d(0, 200%, 0);
}
</style>
