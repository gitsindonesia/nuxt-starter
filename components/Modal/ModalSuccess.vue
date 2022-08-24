<script setup lang="ts">
import { useVModel } from '@vueuse/core';

type Props = {
  modelValue?: boolean;
  title?: string;
  message?: string;
};

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: '',
  message: '',
});

const emit = defineEmits(['update:modelValue', 'close']);

const isOpen = useVModel(props, 'modelValue', emit);
</script>

<template>
  <v-modal
    v-model="isOpen"
    hide-header
    footer-class="!justify-center"
    body-class="!p-0 text-center"
    wrapper-class="!p-0"
    :close-props="{ color: 'primary', block: true }"
    @close="emit('close')"
  >
    <div
      class="bg-success-100 h-14 w-14 rounded-full grid place-items-center mx-auto"
    >
      <v-icon name="heroicons-outline:check" class="w-10 h-10 text-success-500" />
    </div>
    <div class="mt-4">
      <h3 class="font-semibold text-lg mb-2">{{ title }}</h3>
      <p>{{ message }}</p>
    </div>
  </v-modal>
</template>
