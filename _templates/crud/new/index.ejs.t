---
to: pages/<%= h.changeCase.lower(h.inflection.pluralize(name)) %>/index.vue
---
<%
  Fields = (locals.fields || '').split(',').map(v => v.split(':'));
  FieldNames = Fields.map(v => v[0]);
  PascalName = h.changeCase.pascal(name);
  PluralName = h.inflection.pluralize(name);
  SingularName = h.inflection.singularize(name);
  LowerPluralName = h.changeCase.lower(PluralName);
  LowerSingularName = h.changeCase.lower(SingularName);
  PascalPluralName = h.changeCase.pascal(PluralName);
  PascalSingularName = h.changeCase.pascal(SingularName);
%>
<script setup lang="ts">
import { VBreadcrumbItem } from '@morpheme/breadcrumbs';
import { VDataTableHeader } from '@morpheme/ui';
import { watchDebounced } from '@vueuse/core';
import { Post } from '~~/composables/post';

const headers = ref<VDataTableHeader[]>([
  {
    text: 'ID',
    value: 'id',
  },
  <% if (locals.fields) { %>
  <% Fields.forEach(field => { %>
  {
    text: '<%= h.changeCase.header(field[0]) %>',
    value: '<%= field[0] %>',
  },
  <% }) %>
  <% } %>
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
    title: '<%= h.changeCase.header(SingularName) %> Management',
    to: '/<%= LowerPluralName %>',
  },
]);

const modalDelete = ref(false);
const item = ref();

const { all, remove } = use<%= PascalSingularName %>();

const deleteItem = (_item: <%= PascalName %>) => {
  modalDelete.value = true;
  item.value = _item;
};

const removeItem = () => remove(item.value.id);

const fetchData = async (params?: Record<string, any>) => {
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

onMounted(fetchData);

watchDebounced(
  search,
  () => {
    fetchData({
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
  fetchData({
    page,
  });
};
</script>

<template>
  <div>
    <PageHeader title="<%= PascalSingularName %> Management" :breadcrumbs="breadcrumbs">
      <template #button>
        <v-btn color="primary" to="/<%= LowerPluralName %>/create">Add New <%= PascalSingularName %></v-btn>
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
          <v-btn icon rounded text size="sm" :to="`/<%= LowerPluralName %>/${item.id}/edit`">
            <v-icon name="heroicons-outline:pencil" class="w-5 h-5" />
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
            <v-icon name="heroicons-outline:trash" class="w-5 h-5" />
          </v-btn>
        </template>
      </v-data-table>

      <ModalDelete v-model="modalDelete" :api="removeItem" />
    </v-card>
  </div>
</template>
