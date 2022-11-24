<script setup lang="ts">
const items = ref([
  {
    text: 'Item 1',
    value: 1,
  },
])
</script>

<template>
  <AppPageTitle title="Select" subtitle="Select Component" />

  <div class="space-y-5">
    <AppCard>
      <AppCardTitle>
        Select
      </AppCardTitle>

      <VSelect label="Label" placeholder="Placeholder" :items="items" />
    </AppCard>
  </div>
</template>

