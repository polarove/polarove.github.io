<template>
    <nuxt-page />

    <div
        class="position-absolute bottom-0 left-50% transform"
        style="--un-translate-x: -50%; --un-translate-y: -20%">
        <transition name="fade">
            <v-action-bar-theme v-show="visible" class="inline-block mx-4" />
        </transition>

        <transition name="fade">
            <v-action-bar-locale
                class="inline-block mx-4"
                v-show="!localeActionBarVisible && visible" />
        </transition>
    </div>
</template>

<script setup lang="ts">
const visible = ref(false)
setTimeout(() => (visible.value = true))

const { localePath, getLocale } = useI18n()
const router = useRouter()
const localeActionBarVisible = computed(
    () =>
        localePath('/') == router.currentRoute.value.path.concat(getLocale()) ||
        localePath('/') == router.currentRoute.value.path
)
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
