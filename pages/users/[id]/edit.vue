<script setup lang="ts">
import { VBreadcrumbItem } from '@gits-id/breadcrumbs';

const route = useRoute();

const breadcrumbs = ref<VBreadcrumbItem[]>([
  {
    title: 'User Management',
    to: '/users',
  },
  {
    title: 'Create',
    to: `/users/${route.params.id}/edit`,
  },
]);
</script>

<template>
  <div>
    <PageHeader title="Edit User" :breadcrumbs="breadcrumbs" />

    <UsersForm @cancel="$router.push('/users')" />
  </div>
</template>
