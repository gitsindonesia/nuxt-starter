<script setup lang="ts">
import { VBreadcrumbItem } from '@gits-id/breadcrumbs';
import { Icon } from '@iconify/vue';

const breadcrumbs = ref<VBreadcrumbItem[]>([
  {
    title: 'User Management',
    to: '/users',
  },
  {
    title: 'Create',
    to: '/users/create',
  },
]);
</script>

<template>
  <div>
    <div class="flex justify-between items-start gap-4 mb-5">
      <div>
        <v-breadcrumbs :items="breadcrumbs" class="text-gray-500 text-sm" />
        <h1 class="mb-1 font-semibold text-2xl text-gray-800">Add New User</h1>
      </div>
    </div>

    <v-card hide-header hide-footer body-class="py-4">
      <v-input wrapper-class="mb-4" label="Name" placeholder="Username" />
      <v-input wrapper-class="mb-4" label="Email" placeholder="Email" />
      <v-input wrapper-class="mb-4" label="Password" placeholder="Password" />
      <div class="space-x-2">
        <v-btn color="primary">Save</v-btn>
        <v-btn text>Cancel</v-btn>
      </div>
    </v-card>
  </div>
</template>
