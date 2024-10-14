<template>
    <section class="flex flex-col items-center justify-center h-100vh">
        <client-only>
            <v-theme />
            <p class="text-12">
                {{ $colorMode.value }}
            </p>
        </client-only>
    </section>
</template>

<script lang="ts" setup></script>
