<script setup lang="ts">
import type { VBreadcrumbItem } from '@gits-id/ui';

type Props = {
  breadcrumbs?: VBreadcrumbItem[];
  title?: string;
};

const props = withDefaults(defineProps<Props>(), {
  breadcrumbs: () => [],
  title: '',
});
</script>

<template>
  <div class="flex justify-between items-start gap-4 mb-5">
    <div>
      <v-breadcrumbs :items="breadcrumbs" class="text-gray-500 text-sm mb-2" />
      <h1 class="mb-1 font-semibold text-2xl text-gray-800 truncate">
        <slot name="title">{{ title }}</slot>
      </h1>
    </div>
    <slot name="button" />
  </div>
</template>
