<script setup lang="ts">
defineProps<{
  icon: string
  name: string
  description: string
}>()
</script>

<template>
  <div
    class="space-y-4 rounded-xl p-8 shadow-card hover:shadow-xl transition
    duration-300bg-white dark:bg-neutral-800"
  >
    <VIcon :name="icon" size="xl" class="rounded-lg" />
    <h3 class="text-gray-900 dark:text-neutral-200 font-medium">
      {{ name }}
    </h3>
    <p class="text-sm text-gray-700 dark:text-neutral-400">
      {{ description }}
    </p>
  </div>
</template>
