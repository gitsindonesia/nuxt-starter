<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLayoutStore } from '~~/stores/layout';

const layout = useLayoutStore();
const { isMini } = storeToRefs(layout);

useHead({
  title: 'Dashboard',
});
</script>

<template>
  <div class="flex flex-col sm:flex-row">
    <Sidebar />

    <div
      class="sm:flex-1 transition-all duration-300"
      :class="isMini ? 'sm:ml-24' : 'sm:ml-[270px]'"
    >
      <v-app-bar
        class="px-2 py-2 shadow sm:hidden sticky top-0 w-full inset-x-0"
      >
        <div class="flex">
          <v-btn @click="isMini = !isMini" icon rounded text>
            <v-icon name="ri:menu-line" class="w-6 h-6" />
          </v-btn>
          <div class="flex-1">
            <v-logo img-class="h-8 my-1 mx-auto" />
          </div>
          <div class="w-6"></div>
        </div>
      </v-app-bar>

      <div class="p-6">
        <slot />
      </div>
    </div>
  </div>
</template>
