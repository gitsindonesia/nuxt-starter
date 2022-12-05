<script setup lang="ts">
const value = ref(false)
</script>

<template>
  <AppPageTitle title="Switch" subtitle="Switch Component" />

  <div class="space-y-5">
    <AppCard>
      <AppCardTitle>
        Switch
      </AppCardTitle>

      <VSwitch v-model="value" label="Label" />

      <pre class="mt-5">Value: {{ value }}</pre>
    </AppCard>
  </div>
</template>
