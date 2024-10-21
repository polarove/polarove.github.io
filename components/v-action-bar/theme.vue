<template>
	<v-action-bar>
		<v-action-bar-item
			v-for="(theme, index) of themes"
			:key="index"
			class="mx-4"
		>
			<Icon
				:name="theme.icon"
				class="sm:text-4xl xs:text-3xl lt-xs:text-3xl cursor-pointer hover:color-$primary"
				:class="{
					'color-$primary': $colorMode.preference === theme.name
				}"
				@click="$colorMode.preference = theme.name"
			/>
		</v-action-bar-item>
	</v-action-bar>
</template>

<script lang="ts" setup>
const themes = [
	{
		name: 'light',
		icon: 'mdi:white-balance-sunny'
	},
	{
		name: 'dark',
		icon: 'mdi:weather-night'
	},
	{
		name: 'system',
		icon: 'mdi:monitor'
	}
]
</script>
