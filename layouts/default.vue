<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useAuthStore } from '~~/stores/auth';

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

const isMini = useCookie<boolean>('mini');

const auth = useAuthStore();
</script>

<template>
  <div class="flex flex-col sm:flex-row">
    <v-nav-drawer
      v-model:mini="isMini"
      :menus="menus"
      hide-toggle
      small
      :logo-props="{ imgClass: 'mx-auto h-8 mt-2' }"
    >
      <template #logo.mini>
        <div class="text-center font-semibold p-1">GITS</div>
      </template>
      <template #append>
        <div
          class="w-full flex items-center"
          :class="
            isMini ? 'sm:justify-center justify-between' : 'justify-between'
          "
        >
          <v-btn :class="{ 'sm:hidden': isMini }" size="sm" text>
            <Icon icon="heroicons-outline:user" />
            <span class="ml-2"> {{ auth.user.name }} </span>
          </v-btn>
          <v-btn icon size="xs" @click="isMini = !isMini">
            <Icon
              class="transition duration-300 transform"
              :class="isMini ? 'rotate-180' : ''"
              icon="heroicons-outline:chevron-left"
            />
          </v-btn>
        </div>
      </template>
    </v-nav-drawer>

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
