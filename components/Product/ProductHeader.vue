<script lang="ts" setup>
//
</script>

<template>
  <VAppBar shadow="md" size="auto" class="py-4">
    <VContainer centered class="flex justify-between">
      <NuxtLink to="/" class="text-lg font-semibold dark:text-neutral-200">
        Morpheme
      </NuxtLink>
      <VButton
        to="/"
        text
        flush
        color="primary"
        prefix-icon="ph:arrow-left"
      >
        Back to Home
      </VButton>
    </VContainer>
  </VAppBar>
</template>
