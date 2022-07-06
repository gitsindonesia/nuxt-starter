<script setup lang="ts">
import { VBreadcrumbItem } from '@gits-id/breadcrumbs';
import { FormEvent } from '~~/types/form';

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

const { update, find } = useUser();
const router = useRouter();
const loading = ref(false);

const id = computed(() => String(route.params.id));

const onSubmit = async ({ values }: FormEvent) => {
  const { refresh } = update(id.value, values);

  loading.value = true;
  await refresh();
  loading.value = false;

  router.push('/users');
};

const { data: item, pending } = await find(id.value);
</script>

<template>
  <div>
    <PageHeader title="Edit User" :breadcrumbs="breadcrumbs" />

    <ClientOnly>
      <UsersForm
        @submit="onSubmit"
        :loading="loading || pending"
        :initial-values="item"
      />
    </ClientOnly>
  </div>
</template>
