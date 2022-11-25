<script setup lang="ts">
import { colors } from './constants'
</script>

<template>
  <AppPageTitle title="Badge" subtitle="Badge Component" />

  <div class="space-y-5">
    <AppCard>
      <AppCardTitle>
        Default
      </AppCardTitle>

      <div class="space-x-2">
        <VBadge v-for="color in colors" :key="color" :color="color">
          {{ color }}
        </VBadge>
      </div>
    </AppCard>
  </div>
</template>

