<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <AppPageTitle title="Toast" subtitle="Toast Component" />

  <div class="space-y-5">
    <AppCard>
      <AppCardTitle>
        Toast
      </AppCardTitle>

      <VBtn @click="isOpen = !isOpen">
        {{ isOpen ? 'Close' : 'Open' }} Toast
      </VBtn>

      <VToast v-model="isOpen">
        Toast message
        <template #action="{ close }">
          <VBtn text color="primary" @click="close">
            Close
          </VBtn>
        </template>
      </VToast>
    </AppCard>
  </div>
</template>
