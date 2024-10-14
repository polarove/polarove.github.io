<template>
    <section class="flex flex-col items-center justify-center h-100vh">
        <client-only>
            <v-theme />
            <p class="text-12">颜色模式： {{ $colorMode.value }}</p>
            <p class="text-12">主题偏好： {{ $colorMode.preference }}</p>
        </client-only>
    </section>
</template>

<script lang="ts" setup></script>
