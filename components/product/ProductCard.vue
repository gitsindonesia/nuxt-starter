<script setup lang="ts">
defineProps<{
  title: string
  image: string
  description: string
  category: string
}>()
</script>

<template>
  <VCard
    :title="title"
    :image="image"
    image-class="h-48 w-full object-cover"
  >
    <p clas="text-sm !text-gray-500 line-clamp-2">
      {{ description }}
    </p>
    <div class="mt-4">
      <VBadge color="primary">
        {{ category }}
      </VBadge>
    </div>
  </VCard>
</template>
