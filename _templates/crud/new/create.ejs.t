---
to: pages/<%= h.changeCase.lower(h.inflection.pluralize(name)) %>/create.vue
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
import { FormEvent } from '~~/types/form';

const breadcrumbs = ref<VBreadcrumbItem[]>([
  {
    title: '<%= PascalName %> Management',
    to: '/<%= LowerPluralName %>',
  },
  {
    title: 'Create',
    to: '/<%= LowerPluralName %>/create',
  },
]);

const { create } = use<%= PascalSingularName %>();
const router = useRouter();
const loading = ref(false);

const onSubmit = async ({ values }: FormEvent) => {
  const { refresh } = create(values);

  loading.value = true;
  await refresh();
  loading.value = false;

  router.push('/<%= LowerPluralName %>');
};
</script>

<template>
  <div>
    <PageHeader title="Add New <%= PascalSingularName %>" :breadcrumbs="breadcrumbs" />

    <<%= PascalSingularName %>Form @submit="onSubmit" :loading="loading" />
  </div>
</template>
