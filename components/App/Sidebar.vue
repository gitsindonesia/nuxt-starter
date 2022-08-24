<script setup lang="ts">
import { useAuthStore } from '~~/stores/auth';
import { useLayoutStore } from '~~/stores/layout';
import { storeToRefs } from 'pinia';

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

const layout = useLayoutStore();
const { isMini } = storeToRefs(layout);
const auth = useAuthStore();
const router = useRouter();

const dropdownItems = ref([
  {
    text: 'Profile',
    to: '/profile',
  },
  {
    text: 'Logout',
  },
]);

function logout() {
  auth.logout();
  router.push('/auth/login');
}
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
        <v-dropdown top>
          <template #activator>
            <v-dropdown-button
              class="flex items-center gap-2 px-3 py-1"
              :class="{ 'sm:hidden': isMini }"
            >
              <v-icon name="heroicons-outline:user"  class="w-4 h-4"/>
              <span v-if="auth.user"> {{ auth.user.name }} </span>
            </v-dropdown-button>
          </template>

          <v-dropdown-item>Profile</v-dropdown-item>
          <v-dropdown-item divider />
          <v-dropdown-item @click="logout">Logout</v-dropdown-item>
        </v-dropdown>
        <v-btn icon size="xs" @click="isMini = !isMini">
          <v-icon
            class="transition duration-300 transform"
            :class="isMini ? 'rotate-180' : ''"
            name="heroicons-outline:chevron-left"
          />
        </v-btn>
      </div>
    </template>
  </v-nav-drawer>
</template>
