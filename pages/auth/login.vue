<script setup lang="ts">
import { Login } from '@gits-id/ui';
import { useAuthStore } from '~~/stores/auth';

definePageMeta({
  layout: 'auth',
  middleware: 'guest',
});

useHead({
  title: 'Login',
});

withDefaults(defineProps(), {});
defineEmits<{ (e: 'update:modelValue', value: string): void }>();

const auth = useAuthStore();
const router = useRouter();
const error = ref();
const route = useRoute();
const loading = ref(false);

const onSubmit = async (values: Record<string, any>) => {
  error.value = '';

  loading.value = true;
  const res = await $fetch('/api/auth/login', {
    method: 'post',
    body: values,
  });
  loading.value = false;

  if (res.error) {
    error.value = res.error.message;
    return;
  }

  const data = res.data;
  auth.login(data.user, data.token);

  router.push((route.query as any).next || '/');
};
</script>

<template>
  <Login :message="error" :loading="loading" @submit="onSubmit" />
</template>
