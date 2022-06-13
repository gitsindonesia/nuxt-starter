<script setup lang="ts">
import { Login } from '@gits-id/ui';

definePageMeta({
  layout: 'auth',
});

const props = withDefaults(defineProps(), {});

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>();

const onSubmit = (values: Record<string, any>) => {
  console.log(values);
};
</script>

<template>
  <Login @submit="onSubmit" />
</template>
