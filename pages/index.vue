<template>
  <div class="flex flex-col items-center justify-center h-100vh">
    <client-only>
      <v-theme />
    </client-only>
  </div>
  <v-action-bar>
    <v-action-bar-item
      class="mx-8"
      v-for="(item, index) of 6"
      @click="() => console.log(index)"
    >
      <img
        src="https://cdn.warframe.team/me.jpg "
        class="w-100% h-100% object-cover"
      />
    </v-action-bar-item>
  </v-action-bar>
</template>

<script lang="ts" setup></script>

<style scoped>
.containers {
  height: 100vh;
  width: 100vw;
}
</style>
