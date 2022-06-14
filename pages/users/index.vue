<script setup lang="ts">
import { VBreadcrumbItem } from '@gits-id/breadcrumbs';
import { VModalEvent } from '@gits-id/modal';
import { VDataTableHeader } from '@gits-id/ui';
import { Icon } from '@iconify/vue';

const headers = ref<VDataTableHeader[]>([
  {
    text: 'ID',
    value: 'id',
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

/*
Array.from({ length: 30 }, (v, k) => ({
  id: k + 1,
  name: `User ${k + 1}`,
  email: `user-${k + 1}@mail.com`,
  isDelete: false,
}))
*/

const items = ref([]);

const sortBy = ref('name');
const sortDirection = ref('asc');
const search = ref('');

const breadcrumbs = ref<VBreadcrumbItem[]>([
  {
    title: 'User Management',
    to: '/users',
  },
]);

const modalDelete = ref(false);
const item = ref();

const deleteItem = (_item) => {
  modalDelete.value = true;
  item.value = _item;
};

const removeItem = () => {
  return useFetch(`/api/users/${item.value.id}`, {
    method: 'DELETE',
  });
};

const { all } = useUser();
const { data, pending, refresh: getUsers } = all();

onMounted(async () => {
  await getUsers();
  items.value = data.value;
});
</script>

<template>
  <div>
    <PageHeader title="User Management" :breadcrumbs="breadcrumbs">
      <template #button>
        <v-btn color="primary" to="/users/create">Add New User</v-btn>
      </template>
    </PageHeader>

    <v-card
      header-class="!px-4 !py-4 text-gray-600 !font-normal"
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
        :loading="pending"
      >
        <template #item.action="{ item }">
          <v-btn icon rounded text size="sm" :to="`/users/${item.id}/edit`">
            <Icon icon="heroicons-outline:pencil" class="w-5 h-5" />
          </v-btn>
          <v-btn
            color="error"
            icon
            rounded
            text
            size="sm"
            s
            @click="deleteItem(item)"
          >
            <Icon icon="heroicons-outline:trash" class="w-5 h-5" />
          </v-btn>
        </template>
      </v-data-table>

      <ModalDelete v-model="modalDelete" :api="removeItem" />
    </v-card>
  </div>
</template>
