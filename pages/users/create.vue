<script setup lang="ts">
import { VBreadcrumbItem } from '@gits-id/breadcrumbs';

const breadcrumbs = ref<VBreadcrumbItem[]>([
  {
    title: 'User Management',
    to: '/users',
  },
  {
    title: 'Create',
    to: '/users/create',
  },
]);
</script>

<template>
  <div>
    <PageHeader title="Add New User" :breadcrumbs="breadcrumbs" />

    <UsersForm />
  </div>
</template>
