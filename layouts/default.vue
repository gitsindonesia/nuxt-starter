<script setup lang="ts">
useHead({
  title: 'Nuxt 3 + GITS UI',
});

const menus = ref([
  {
    text: 'Home',
    to: '/',
    icon: 'ri:home-line',
  },
  {
    text: 'User Management',
    to: '/users',
    icon: 'ri:user-line',
  },
]);

const isMini = ref(true);
</script>
<template>
  <div class="flex">
    <v-nav-drawer v-model:mini="isMini" :menus="menus" />

    <div
      class="flex-1 px-4 py-6 transition-all duration-300"
      :class="isMini ? 'ml-24' : 'ml-[270px]'"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
:global(body) {
  @apply bg-gray-100;
}
</style>
