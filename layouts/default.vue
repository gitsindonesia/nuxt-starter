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
  <div class="flex">
    <v-nav-drawer v-model:mini="isMini" :menus="menus" hide-toggle>
      <template #logo.mini>
        <div class="text-center font-semibold p-1">GITS</div>
      </template>
      <template #append>
        <div
          class="w-full flex items-center"
          :class="isMini ? 'justify-center' : 'justify-between'"
        >
          <v-btn v-if="!isMini" size="sm" text>
            <Icon icon="heroicons-outline:user" />
            <span class="ml-2"> {{ auth.user.name }} </span>
          </v-btn>
          <v-btn icon size="xs" @click="isMini = !isMini">
            <Icon
              class="transition duration-300 transform"
              :class="isMini ? 'rotate-180' : ''"
              :icon="
                isMini
                  ? 'heroicons-outline:chevron-right'
                  : 'heroicons-outline:chevron-left'
              "
            />
          </v-btn>
        </div>
      </template>
    </v-nav-drawer>

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
