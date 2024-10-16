<template>
    <section
        class="ma-auto xl:mt-30vh lg:mt-25vh md:mt-20vh sm:mt-15vh xs:mt-10vh lt-xs:mt-10vh text-center">
        <div
            style="
                --text-xl: 4rem;
                --text-lg: 3.5rem;
                --text-md: 3.25rem;
                --text-sm: 3rem;
                --text-lt-sm: 2.75rem;
            ">
            <v-locale />
        </div>
        <h1 class="text-center my-12">
            {{ $t('welcome', { name: $t('name') as string }) }}
        </h1>
        <v-route
            :routes="routes"
            class="lt-sm:grid lt-sm:grid-cols-[2fr_2fr] lt-sm:gap-4"
            style="
                --px-sm: 2.5rem;
                --py: 0.5rem;
                --text-xl: 1.5rem;
                --text-lg: 1.4rem;
                --text-md: 1.3rem;
                --text-sm: 1.2rem;
                --text-lt-sm: 1.1rem;
                --icon-xl: 3rem;
                --icon-lg: 2.75rem;
                --icon-md: 2.5rem;
                --icon-sm: 2.25rem;
                --icon-lt-sm: 2rem;
            ">
            <template #link="{ prop }">
                <i18n-link
                    v-if="prop.index === mbti"
                    @click="handleClick(prop.index)"
                    class="decoration-none color-inherit hover:color-$primary"
                    :aria-label="$t(prop.route.translateKey)"
                    activeClass="color-$primary!"
                    :to="prop.route.path"
                    :prefetch="true">
                    <transition
                        :name="
                            prop.route.translateKey === ex[0]
                                ? 'fade-up'
                                : 'fade-down'
                        ">
                        <Icon
                            v-show="visible"
                            :name="prop.route.icon"
                            :style="[
                                prop.route.translateKey === ex[0]
                                    ? 'transition-delay: 0ms'
                                    : 'transition-delay: 67ms'
                            ]"
                            class="vertical-middle xl:text-size-$icon-xl lg:text-size-$icon-lg md:text-size-$icon-md sm:text-size-$icon-sm lt-sm:text-size-$icon-lt-sm" />
                    </transition>
                    <transition
                        :name="
                            prop.route.translateKey === ex[0]
                                ? 'fade-up'
                                : 'fade-down'
                        ">
                        <div
                            v-show="visible"
                            :style="[
                                prop.route.translateKey === ex[0]
                                    ? 'transition-delay: 67ms'
                                    : 'transition-delay: 0ms'
                            ]"
                            class="mt-1 xl:text-size-$text-xl lg:text-size-$text-lg md:text-size-$text-md sm:text-size-$text-sm lt-sm:text-size-$text-lt-sm">
                            {{ $t(prop.route.translateKey) }}
                        </div>
                    </transition>
                </i18n-link>
            </template>
        </v-route>
    </section>
</template>

<script lang="ts" setup>
const visible = ref(true)
const ex = ['mbti', 'wpti']

const mbti = computed(() =>
    routes.findIndex((obj) => ex.includes(obj['translateKey']))
)
const routes = reactive([
    {
        path: '/',
        translateKey: 'mbti',
        icon: 'mdi:zodiac-scorpio'
    },
    {
        path: '/resume',
        translateKey: 'resume',
        icon: 'mdi:script-text'
    },
    {
        path: '/projects',
        translateKey: 'project',
        icon: 'mdi:file-code-outline'
    },
    {
        path: '/articles',
        translateKey: 'article',
        icon: 'mdi:file-document-edit-outline'
    }
])

const handleClick = (index: number) => {
    visible.value = false

    function toggle() {
        if (routes[index].translateKey === ex[0])
            routes[index].translateKey = ex[1]
        else routes[index].translateKey = ex[0]
        visible.value = true
    }

    setTimeout(() => toggle(), 456)
}
</script>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
    transition:
        transform 456ms,
        opacity 456ms;
}
.fade-up-enter-from,
.fade-up-leave-to {
    opacity: 0;
    transform: translateY(-50%);
}

.fade-down-enter-active,
.fade-down-leave-active {
    transition:
        opacity 456ms,
        transform 456ms;
}
.fade-down-enter-from,
.fade-down-leave-to {
    opacity: 0;
    transform: translateY(50%);
}
</style>
