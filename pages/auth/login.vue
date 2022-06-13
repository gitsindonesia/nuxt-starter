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

const props = withDefaults(defineProps(), {});

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>();

const { store } = useAuthStorage();
const auth = useAuthStore();
const router = useRouter();
const error = ref();
const route = useRoute();
const loading = ref(false);

const onSubmit = async (values: Record<string, any>) => {
  error.value = '';

  const {
    data,
    error: err,
    refresh,
  } = useFetch('/api/auth/login', {
    method: 'post',
    body: values,
  });

  loading.value = true;
  refresh();
  loading.value = false;

  if (err.value) {
    error.value = 'Unauthenticated';
    return;
  }

  const token = data.value.data.token;
  const user = data.value.data.user;

  auth.login(user, token);

  if (!err.value && !data.value.error) {
    router.push((route.query as any).next || '/');
  } else {
    error.value = err.value || data.value.error?.message;
  }
};
</script>

<template>
  <Login :message="error" :loading="loading" @submit="onSubmit" />
</template>
