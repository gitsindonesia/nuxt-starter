<script setup lang="ts">
import { useLayout } from '~~/composables/layout';
import { Icon } from '@iconify/vue';

const {isMini} = useLayout()

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
        class="px-2 py-2 shadow sm:hidden sticky top-0 w-full inset-x-0"
      >
        <div class="flex">
          <v-btn @click="isMini = !isMini" icon rounded text>
            <Icon icon="ri:menu-line" class="w-6 h-6" />
          </v-btn>
          <div class="flex-1">
            <v-logo img-class="h-8 my-1 mx-auto" />
          </div>
          <div class="w-6"></div>
        </div>
      </v-app-bar>

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
