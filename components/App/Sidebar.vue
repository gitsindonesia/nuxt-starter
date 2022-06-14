<script setup lang="ts">
import { useAuthStore } from '~~/stores/auth';
import { Icon } from '@iconify/vue';
import { isMini } from '~~/composables/layout';

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

const auth = useAuthStore();
</script>

<template>
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
</template>
