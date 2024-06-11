<script setup lang="ts">
const {
  imageAlt = '',
} = defineProps<{
  image: string
  imageAlt?: string
  label: string
  filename: string
  removeable?: boolean
}>()

const emit = defineEmits<{
  (e: 'remove'): void
}>()
</script>

<template>
  <div class="border rounded-[12px] p-4 flex gap-4 items-center bg-white shadow-xs">
    <NuxtImg
      :src="image"
      :alt="imageAlt"
      width="40"
      height="40"
      class="border border-gray-200 rounded-[8px] shrink-0"
    />
    <div class="flex-grow space-y-0.5">
      <h3 class="text-sm font-medium text-gray-700">
        {{ label }}
      </h3>
      <p class="text-xs text-gray-600">
        {{ filename }}
      </p>
    </div>
    <VButton
      v-if="removeable"
      prefix-icon="ph:trash"
      size="sm"
      fab
      text
      @click="emit('remove')"
    />
  </div>
</template>
