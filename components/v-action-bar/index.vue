<template>
    <div
        class="bg-$background-card shadow rounded-3 h-67px py-3"
        style="--un-shadow-color: rgba(0, 0, 0, 0.33)">
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
