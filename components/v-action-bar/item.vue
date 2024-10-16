<template>
    <div
        class="h-100% overflow-hidden cursor-pointer inline-block"
        @click="emit('click')">
        <slot>放点东西进来</slot>
    </div>
</template>

<script lang="ts" setup>
import type { ActionBarItemProps } from './types'

withDefaults(defineProps<ActionBarItemProps>(), {
    icon: '',
    text: '',
    size: '',
    href: '',
    target: '_self',
    disabled: false
})

const emit = defineEmits<{
    (e: 'click'): void
}>()
</script>
