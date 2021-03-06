<script setup lang="ts">
import { VBreadcrumbItem } from '@gits-id/breadcrumbs';
import { VDataTableHeader } from '@gits-id/ui';
import { Icon } from '@iconify/vue';
import { watchDebounced } from '@vueuse/core';

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

const items = ref([]);
const sortBy = ref('name');
const sortDirection = ref('asc');
const search = ref('');
const loading = ref(false);
const defaultParams = reactive({
  page: 1,
  limit: 10,
});

const breadcrumbs = ref<VBreadcrumbItem[]>([
  {
    title: 'User Management',
    to: '/users',
  },
]);

const modalDelete = ref(false);
const item = ref();

const { all, remove } = useUser();

const deleteItem = (_item: any) => {
  modalDelete.value = true;
  item.value = _item;
};

const removeItem = () => remove(item.value.id);

const getUsers = async (params?: Record<string, any>) => {
  const { data, refresh } = all({
    params: {
      ...defaultParams,
      ...params,
    },
  });

  loading.value = true;
  await refresh();
  loading.value = false;

  items.value = data.value;
};

onMounted(getUsers);

watchDebounced(
  search,
  () => {
    getUsers({
      search: search.value,
    });
  },
  { debounce: 500, maxWait: 1000 }
);

const pagination = computed(() => ({
  totalItems: items.value.length,
  perPage: 10,
}));

const onPageChange = (page: number) => {
  getUsers({
    page,
  });
};
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
        server-side
        class="!rounded-none !shadow-none !border-t"
        :loading="loading"
        :pagination="pagination"
        @page:change="onPageChange"
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
