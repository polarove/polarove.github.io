<template>
  <teleport to="body">
    <transition name="move-up">
      <div
        v-if="visible"
        :class="`justify-${justify} items-${items}`"
        class="flex position-absolute w-40vw h-67px mb-4 rounded-3 p-4 bottom-0 left-50% transform b-1 b-solid b-red"
        style="--un-translate-x: -50%"
      >
        <slot></slot>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import type { ActionBarProps } from "./types";
withDefaults(defineProps<ActionBarProps>(), {
  justify: "between",
  items: "center",
});
const visible = ref(true);
</script>

<style scoped>
.move-up-enter-active,
.move-up-leave-active {
  transition: transform 0.5s ease;
}

.move-up-enter,
.move-up-leave-to {
  transform: translateY(100%);
}
</style>
