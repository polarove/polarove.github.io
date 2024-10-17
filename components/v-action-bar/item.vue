<template>
	<div
		class="overflow-hidden cursor-pointer flex items-center justify-center"
		@click="emit('click')"
	>
		<slot>放点东西进来</slot>
	</div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
	(e: 'click'): void
}>()
</script>
