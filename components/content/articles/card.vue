<template>
    <section>
        <h1 class="text-4xl"><slot>Default value in card</slot></h1>
        <content-slot></content-slot>
        <slot name="description" />
    </section>
</template>
