<template>
	<v-route
		:routes="routes"
		class="fixed z-999 bg-[--background-header] top-0 flex items-center my-0 w-100vw lt-sm:justify-around"
		:class="[scroll > shadowThreshold ? 'drop-shadow-md' : '']"
		style="
            --py: 0.75rem;
            --px-sm: 2rem;
            --text-xl: 1.1rem;
            --text-lg: 1.1rem;
            --text-md: 1rem;
            --text-sm: 1rem;
            --text-lt-sm: 1rem;
            --icon-xl: 2rem;
            --icon-lg: 1.75rem;
            --icon-md: 1.5rem;
            --icon-sm: 1.5rem;
            --icon-lt-sm: 1.5rem;
        "
	/>
	<slot />
</template>

<script lang="ts" setup>
import type { IRoute } from '../v-route/types'

withDefaults(defineProps<{ routes: IRoute[], shadowThreshold?: number }>(), {
	shadowThreshold: 48
})

const { scroll } = useWindowScroll()
</script>

<style lang="scss" scoped></style>
