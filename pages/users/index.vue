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
    id: k + 1,
    name: `User ${k + 1}`,
    email: `user-${k + 1}@mail.com`,
  }))
);

const sortBy = ref('name');
const sortDirection = ref('asc');
const search = ref('');

const breadcrumbs = ref<VBreadcrumbItem[]>([
  {
    title: 'User Management',
    to: '/users',
  },
]);
</script>

<template>
  <div>
    <PageHeader title="User Management" :breadcrumbs="breadcrumbs">
      <template #button>
        <v-btn color="primary" to="/users/create">Add New User</v-btn>
      </template>
    </PageHeader>

    <v-card
      header-class="!px-4 !py-4 text-gray-600"
      body-class="!p-0"
      hide-footer
    >
      <template #header>
        <v-input
          v-model="search"
          prepend-icon="heroicons-outline:search"
          placeholder="Search..."
        />
      </template>

      <v-data-table
        v-model:sortBy="sortBy"
        v-model:sortDirection="sortDirection"
        :headers="headers"
        :items="items"
        :search="search"
        must-sort
        dense
        class="!rounded-none !shadow-none !border-t"
      >
        <template #item.action="{ item }">
          <v-btn icon rounded text size="sm" :to="`/users/${item.id}/edit`">
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
