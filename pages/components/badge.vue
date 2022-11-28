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

    <AppCard>
      <AppCardTitle>
        Rounded
      </AppCardTitle>

      <div class="space-x-2">
        <VBadge v-for="color in colors" :key="color" :color="color" rounded>
          {{ color }}
        </VBadge>
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Sizes
      </AppCardTitle>

      <div class="space-x-2">
        <VBadge small>
          small
        </VBadge>
        <VBadge>
          default
        </VBadge>
        <VBadge large>
          large
        </VBadge>
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Bubble
      </AppCardTitle>

      <div class="space-x-2">
        <VBtn
          prefix-icon="ri:notification-4-line"
          fab
          icon
          text
          class="relative"
        >
          <VBadge color="error" class="absolute rounded-full -top-1 -right-2" small>
            20
          </VBadge>
        </VBtn>
      </div>
    </AppCard>
  </div>
</template>

