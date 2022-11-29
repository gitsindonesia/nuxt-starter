<script setup lang="ts">
const items = ref([
  {
    text: 'Item 1',
    value: 1,
  },
  {
    text: 'Item 2',
    value: 2,
  },
  {
    text: 'Item 3',
    value: 3,
  },
])

const selected = ref()
</script>

<template>
  <AppPageTitle title="MultiSelect" subtitle="MultiSelect Component" />

  <div class="space-y-5">
    <AppCard>
      <AppCardTitle>
        MultiSelect
      </AppCardTitle>

      <VMultiSelect
        v-model="selected"
        label="Label"
        placeholder="Placeholder"
        :items="items"
      />
    </AppCard>
  </div>
</template>

