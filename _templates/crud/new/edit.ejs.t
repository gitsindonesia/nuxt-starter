---
to: pages/<%= h.changeCase.lower(h.inflection.pluralize(name)) %>/[id]/edit.vue
---
<script setup lang="ts">
import {computed, onMounted, ref, toRefs} from 'vue';
import {useRouter} from 'vue-router';
import Form from '../__Form.vue';
import {use<%= h.changeCase.pascal(name) %>} from '../__index';

type Props = {
  id: string;
}

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

const router = useRouter();
const {loading, item, fetchItem, update} = use<%= h.changeCase.pascal(name) %>();

const initialValues = computed(() => item.value);

const onSubmit = async (values: Record<string, unknown>) => {
  const res = await update(id.value, values);

  if (res.id) {
    router.push('/cms/<%= h.changeCase.lower(h.inflection.pluralize(name)) %>');
  } else {
    // TODO: handle errors
  }
};

onMounted(() => {
  fetchItem(id.value);
});
</script>

<template>
  <PageHeader title="Edit <%= h.changeCase.pascal(name) %>" :breadcrumbs="breadcrumbs" />

  <<%= h.changeCase.pascal(h.inflection.singularize(name)) %>Form
    action="edit"
    :initial-values="initialValues"
    :loading="loading.update"
    @submit="onSubmit"
  />
</template>