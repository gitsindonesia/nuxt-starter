<script setup lang="ts">
const menus = ref([
  {
    text: "Home",
    to: "/",
  },
]);
</script>
<template>
  <div>
    <v-navbar :menus="menus" />

    <div class="container mx-auto px-4 py-6">
      <slot />
    </div>
  </div>
</template>