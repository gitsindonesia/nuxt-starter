<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
}

withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: '',
})
</script>

<template>
  <div class="mb-5 space-y-1">
    <h1 class="text-2xl font-bold">
      {{ title }}
    </h1>
    <p class="text-gray-500">
      {{ subtitle }}
    </p>
  </div>
</template>
