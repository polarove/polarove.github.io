<template>
    <div
        :class="`justify-${justify} items-${items}`"
        class="flex position-absolute h-67px mb-4 rounded-3 py-3 bottom-0 left-50% transform b-1 b-solid b-red"
        style="--un-translate-x: -50%">
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
