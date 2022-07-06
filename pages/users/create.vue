<script setup lang="ts">
import { VBreadcrumbItem } from '@gits-id/breadcrumbs';
import { FormEvent } from '~~/types/form';

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

const { create } = useUser();
const router = useRouter();
const loading = ref(false);

const onSubmit = async ({ values }: FormEvent) => {
  const { refresh } = create(values);

  loading.value = true;
  await refresh();
  loading.value = false;

  router.push('/users');
};
</script>

<template>
  <div>
    <PageHeader title="Add New User" :breadcrumbs="breadcrumbs" />

    <ClientOnly>
      <UsersForm @submit="onSubmit" :loading="loading" />
    </ClientOnly>
  </div>
</template>
