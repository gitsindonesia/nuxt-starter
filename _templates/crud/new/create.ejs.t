---
to: pages/<%= h.changeCase.lower(h.inflection.pluralize(name)) %>/create.vue
---
<script setup lang="ts">
import {useRouter} from 'vue-router';

const breadcrumbs = ref([
  {
    title: 'Data',
    to: '/cms/<%= h.changeCase.lower(h.inflection.pluralize(name)) %>',
  },
  {
    title: '<%= h.changeCase.pascal(name) %>s',
    to: '/cms/<%= h.changeCase.lower(h.inflection.pluralize(name)) %>',
  },
  {
    title: 'Add <%= h.changeCase.pascal(name) %>',
    to: '/cms/<%= h.changeCase.lower(h.inflection.pluralize(name)) %>/create',
  },
]);

const router = useRouter();
const {loading, create} = use<%= h.changeCase.pascal(name) %>();

const onSubmit = async (values: Record<string, unknown>) => {
  const res = await create(values);

  if (res.id) {
    router.push('/cms/<%= h.changeCase.lower(h.inflection.pluralize(name)) %>');
  } else {
    // TODO: handle errors
  }
};
</script>

<template>
  <PageHeader title="Add <%= h.changeCase.pascal(name) %>" :breadcrumbs="breadcrumbs" />

  <<%= h.changeCase.pascal(h.inflection.singularize(name)) %>Form action="create" :loading="loading.create" @submit="onSubmit" />
</template>