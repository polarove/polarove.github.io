<template>
    <div
        :class="`justify-${justify} items-${items}`"
        class="bg-$background-card flex h-67px mb-4 rounded-3 py-3 b-1 b-solid b-red">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import type { ActionBarProps } from './types'
withDefaults(defineProps<ActionBarProps>(), {
    justify: 'between',
    items: 'center'
})
</script>
