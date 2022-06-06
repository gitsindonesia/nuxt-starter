<script setup lang="ts">
useHead({
  title: "Nuxt 3 + GITS UI",
});

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