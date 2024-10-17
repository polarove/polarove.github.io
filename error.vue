<template>
	<div class="text-center mt-96">
		<Icon
			name="mdi:test-tube-empty"
			class="text-4xl"
		/>
		<h2>{{ error.statusCode }} - {{ error.message }}</h2>
		<v-button @click="handleError">
			Back
		</v-button>
	</div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()

const handleError = () => clearError({ redirect: '/' })
</script>
