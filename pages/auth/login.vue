<script setup lang="ts">
import { Login } from '@gits-id/ui';

type Props = {
  modelValue?: string;
};

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
});

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>();
</script>

<template>
  <Login />
</template>
