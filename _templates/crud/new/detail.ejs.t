---
to: pages/<%= h.changeCase.lower(h.inflection.pluralize(name)) %>/[id]/index.vue
---
<script setup lang="ts">
import {computed, onMounted, ref, toRefs} from 'vue';

type Props = {
  id: string;
};

const props = withDefaults(defineProps<Props>(), {});

const {id} = toRefs(props);

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
    to: '/cms/<%= h.changeCase.lower(h.inflection.pluralize(name)) %>/${id.value}/edit',
  },
]);

const {item, fetchItem} = use<%= h.changeCase.pascal(name) %>();

const initialValues = computed(() => ({
  name: item.value?.name,
  email: item.value?.email,
}));

onMounted(() => {
  fetchItem(id.value);
});
</script>

<template>
  <PageHeader title="View <%= h.changeCase.pascal(name) %>" :breadcrumbs="breadcrumbs" />

  <<%= h.changeCase.pascal(h.inflection.singularize(name)) %>Form action="view" :initial-values="initialValues" />
</template>
