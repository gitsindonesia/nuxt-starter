<script setup lang="ts">
import { isMini } from '~~/composables/layout';

useHead({
  title: 'Nuxt 3 + GITS UI',
});
</script>

<template>
  <div class="flex flex-col sm:flex-row">
    <AppSidebar />

    <div
      class="sm:flex-1 transition-all duration-300"
      :class="isMini ? 'sm:ml-24' : 'sm:ml-[270px]'"
    >
      <v-app-bar
        class="px-4 py-2 shadow sm:hidden sticky top-0 w-full inset-x-0"
        @toggleMenu="isMini = !isMini"
      />

      <div class="px-4 py-6">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
:global(body) {
  @apply bg-gray-100;
}
</style>
