<template>
  <div
    class="w-72px h-72px rounded-3 overflow-hidden hover:transform transition-all-167 cursor-pointer"
    @click="$emit('click')"
    style="
      --un-translate-y: -20%;
      --un-scale-y: 1.2;
      --un-scale-x: 1.2;
      --un-scale-z: 1.2;
    "
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import type { ActionBarItemProps } from "./types";

withDefaults(defineProps<ActionBarItemProps>(), {
  icon: "",
  text: "",
  size: "",
  href: "",
  target: "_self",
  disabled: false,
});
</script>

<style lang="scss" scoped></style>
