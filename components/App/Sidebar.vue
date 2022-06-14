<script setup lang="ts">
import { useAuthStore } from '~~/stores/auth';
import { Icon } from '@iconify/vue';
import { isMini } from '~~/composables/layout';
import { VBtn, DropdownButton } from '@gits-id/ui';

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
            <DropdownButton
              :as="VBtn"
              :class="{ 'sm:hidden': isMini }"
              size="sm"
              text
            >
              <Icon icon="heroicons-outline:user" />
              <span class="ml-2"> {{ auth.user.name }} </span>
            </DropdownButton>
          </template>

          <v-dropdown-item>Profile</v-dropdown-item>
          <v-dropdown-item divider />
          <v-dropdown-item @click="logout">Logout</v-dropdown-item>
        </v-dropdown>
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
