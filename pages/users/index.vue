<script setup lang="ts">
import { VBreadcrumbItem } from '@gits-id/breadcrumbs';
import { VDataTableHeader } from '@gits-id/ui';
import { Icon } from '@iconify/vue';

const headers = ref<VDataTableHeader[]>([
  {
    text: '#',
    value: 'index',
    sortable: false,
  },
  {
    text: 'Name',
    value: 'name',
  },
  {
    text: 'Email',
    value: 'email',
  },
  {
    text: 'Action',
    value: 'action',
    align: 'center',
    sortable: false,
  },
]);

const items = ref(
  Array.from({ length: 30 }, (v, k) => ({
    name: `User ${k + 1}`,
    email: `user-${k + 1}@mail.com`,
  }))
);

const sortBy = ref('name');
const sortDirection = ref('asc');

const breadcrumbs = ref<VBreadcrumbItem[]>([
  {
    title: 'User Management',
    to: '/',
  },
  {
    title: 'List',
    to: '/',
  },
]);
</script>

<template>
  <div>
    <!-- <h1 class="mb-3 font-semibold text-2xl">User Management</h1> -->

    <div class="flex justify-between items-center gap-4 mb-5">
      <v-breadcrumbs class="mb-0" :items="breadcrumbs" />
      <v-btn color="primary" to="/users/create">Add New User</v-btn>
    </div>

    <v-card
      title="User Management"
      header-class="!px-4 !py-4 text-gray-600"
      body-class="!p-0"
      hide-footer
    >
      <v-data-table
        v-model:sortBy="sortBy"
        v-model:sortDirection="sortDirection"
        :headers="headers"
        :items="items"
        must-sort
        dense
        class="!rounded-none !shadow-none !border-t"
      >
        <template #item.action>
          <v-btn icon rounded text size="sm">
            <Icon icon="heroicons-outline:pencil" class="w-5 h-5" />
          </v-btn>
          <v-btn color="error" icon rounded text size="sm">
            <Icon icon="heroicons-outline:trash" class="w-5 h-5" />
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
