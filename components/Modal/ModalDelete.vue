<script setup lang="ts">
import { VModalEvent } from '@gits-id/modal';
import { useVModel } from '@vueuse/core';
import { Icon } from '@iconify/vue';

type Props = {
  modelValue?: boolean;
  title?: string;
  message?: string;
  loading?: boolean;
  api?: any;
  successTitle?: string;
  successMessage?: string;
};

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: 'Remove Item',
  message: 'Are you sure want to remove this item?',
  loading: false,
  successTitle: 'Success',
  successMessage: 'Item removed successfully!',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'update:loading', value: boolean): void;
  (e: 'confirm'): void;
}>();

const { loading } = toRefs(props);

const isOpen = useVModel(props, 'modelValue', emit);
const isLoading = ref(props.loading);
const isSuccess = ref(false);

watch(
  loading,
  (val) => {
    isLoading.value = val;
  },
  { immediate: true }
);

const onConfirm = (e: VModalEvent) => {
  isLoading.value = true;
  const { error } = props.api();
  isLoading.value = false;

  if (!error.value) {
    e.close();
    setTimeout(() => {
      isSuccess.value = true;
    }, 500);
  }
};
</script>

<template>
  <v-modal
    :title="title"
    v-model="isOpen"
    :close-props="{ block: true }"
    confirm
    :confirm-props="{ color: 'error', block: true }"
    :loading="isLoading"
    body-class="text-center"
    hide-header
    footer-class="flex-row-reverse"
    @confirm="onConfirm"
  >
    <div
      class="bg-warning-100 h-14 w-14 rounded-full grid place-items-center mx-auto"
    >
      <Icon
        icon="heroicons-outline:question-mark-circle"
        class="w-10 h-10 text-warning-500"
      />
    </div>
    <div class="mt-4">
      <h3 class="font-semibold text-lg mb-2">{{ title }}</h3>
      <p>{{ message }}</p>
    </div>
  </v-modal>

  <ModalSuccess
    v-model="isSuccess"
    :title="successTitle"
    :message="successMessage"
    @close="isSuccess = false"
  />
</template>
