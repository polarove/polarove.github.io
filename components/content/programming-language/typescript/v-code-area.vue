<template>
	<section class="hover:b-[--primary] bg-[--background-card] rounded-2 b-1 b-[--background-page] b-solid px-6 position-relative code-area">
		<slot />
		<div class="position-absolute top-2 right-2 opacity-33 hover:color-[--primary]">
			<slot name="language">
				unknown
			</slot>
		</div>
	</section>
</template>

<style>
.code-area {
	p {
		margin: 0;
	}
}
</style>
