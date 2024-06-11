<script setup lang="ts">
const toast = useToast()
</script>

<template>
  <VToast
    v-model="toast.isOpen"
    v-bind="toast.options"
  >
    {{ toast.message }}

    <template #action>
      <VButton text flush @click="toast.close">
        <span class="text-white">
          Close
        </span>
      </VButton>
    </template>
  </VToast>
</template>
