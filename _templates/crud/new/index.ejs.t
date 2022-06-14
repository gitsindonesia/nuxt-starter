---
to: pages/<%= h.changeCase.lower(h.inflection.pluralize(name)) %>/index.vue
---
<%
 Fields = (locals.fields || '').split(',').map(v => v.split(':'));
 FieldNames = Fields.map(v => v[0]);
 SearchBy = FieldNames.map(v => `'${v[0]}'`).join(', ')
%>
<script setup lang="ts">
import {ref, onMounted, computed} from 'vue';
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon,
} from '@heroicons/vue/solid';
import {
  use<%= h.changeCase.pascal(name) %>,
  type <%= h.changeCase.pascal(name) %>
} from './__index';

const breadcrumbs = ref([
  {
    title: 'Data',
    to: '/cms/<%= h.changeCase.lower(name) %>',
  },
  {
    title: '<%= h.changeCase.title(h.inflection.pluralize(name)) %>',
    to: '/cms/<%= h.changeCase.snake(h.inflection.pluralize(name)) %>',
  },
]);

const headers = ref([
  {
    text: 'ID',
    value: 'id',
    sortable: false,
  },
  <% if(locals.fields){ -%>
  <% Fields.forEach(function(field){ %>
  {
    text: '<%= h.changeCase.title(field[0]) %>',
    value: '<%= h.changeCase.camelCase(field[0]) %>',
  },
  <% }); %>
  <% } -%>
  {
    text: 'Actions',
    value: 'actions',
    align: 'center',
    sortable: false,
  },
]);

const {search, loading, items, fetchItems, deleteItem, meta} = use<%= h.changeCase.pascal(name) %>();

const sortBy = ref('id');
const sortDirection = ref('asc');
const alert = ref(false);
const dialog = ref(false);
const item = ref<<%= h.changeCase.pascal(name) %> | null>(null);
const searchBy = ref([<%- SearchBy %>]);

const delete<%= h.changeCase.pascal(name) %> = (selectedItem: <%= h.changeCase.pascal(name) %>) => {
  item.value = selectedItem;
  dialog.value = true;
};

const remove<%= h.changeCase.pascal(name) %> = async (id: number | undefined) => {
  await deleteItem(String(id));
  dialog.value = false;

  setTimeout(() => {
    alert.value = true;
  }, 500);
};

onMounted(() => {
  fetchItems();
});

const pagination = computed(() => ({
  totalItems: meta.value.total,
  perPage: 10,
}));

const onPageChange = (page: number) => {
  fetchItems({
    page,
  });
};
</script>

<template>
  <page-header title="<%= h.changeCase.pascal(name) %> Management" :breadcrumbs="breadcrumbs" />

  <v-card
    hide-footer
    header-class="flex flex-col sm:flex-row justify-between gap-3 px-3 py-2"
    body-class="!px-0"
  >
    <template #header>
      <div class="w-full sm:w-5/12">
        <v-input placeholder="Search..." prepend-icon="search" class="pl-10" />
      </div>
      <div class="grid sm:flex gap-2">
        <v-btn to="/cms/<%= h.changeCase.lower(h.inflection.pluralize(name)) %>/create" color="primary" class="whitespace-nowrap">
          <PlusIcon class="text-white w-5 h-5 mr-3" />
          Add <%= h.changeCase.pascal(name) %>
        </v-btn>
      </div>
    </template>

    <v-data-table
      v-model:sortBy="sortBy"
      v-model:sortDirection="sortDirection"
      v-model:search="search"
      :search-by="searchBy"
      class="!shadow-none border-t !rounded-none"
      :items="items"
      :headers="headers"
      :loading="loading.items"
      :total-items="meta.total"
      :pagination="pagination"
      server-side
      @page:change="onPageChange"
    >
      <template #item.actions="{item}">
        <div class="flex gap-1 justify-center">
          <v-btn
            :to="`/cms/<%= h.changeCase.lower(h.inflection.pluralize(name)) %>/${item.id}`"
            icon
            rounded
            text
            size="sm"
            color=""
          >
            <EyeIcon class="w-5 h-5" />
          </v-btn>
          <v-btn
            :to="`/cms/<%= h.changeCase.lower(h.inflection.pluralize(name)) %>/${item.id}/edit`"
            icon
            rounded
            text
            size="sm"
            color="info"
          >
            <PencilIcon class="w-5 h-5" />
          </v-btn>
          <v-btn
            text
            rounded
            icon
            size="sm"
            color="error"
            @click="delete<%= h.changeCase.pascal(name) %>(item)"
          >
            <TrashIcon class="w-5 h-5" />
          </v-btn>
        </div>
      </template>
    </v-data-table>
  </v-card>

  <v-modal
    v-model="dialog"
    title="Delete <%= h.changeCase.pascal(name) %>"
    confirm
    confirm-color="error"
    confirm-text="Delete"
    close-text="Cancel"
    :loading="loading.delete"
    @confirm="remove<%= h.changeCase.pascal(name) %>(item?.id)"
  >
    Are you sure want to delete this <%= name %>?
    <strong>{{ item?.name }}</strong>
  </v-modal>

  <v-toast
    v-model="alert"
    title="Notification"
    :timeout="2000"
    type="success"
    color="black"
  >
    <%= h.changeCase.pascal(name) %> deleted
  </v-toast>
</template>

<route lang="yaml">
meta:
  layout: cms
</route>


