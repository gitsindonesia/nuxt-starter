<script setup lang="ts">
import { defaultColors as colors, defaultSizes as sizes } from '@gits-id/theme/defaultTheme'
</script>

<template>
  <AppPageTitle title="Buttons" subtitle="Button Component" />

  <div class="space-y-5">
    <AppCard>
      <AppCardTitle>
        Default
      </AppCardTitle>

      <div class="flex flex-wrap gap-2">
        <VBtn v-for="color in colors" :key="color" :color="color">
          {{ color }}
        </VBtn>
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Rounded
      </AppCardTitle>

      <div class="flex flex-wrap gap-2">
        <VBtn v-for="color in colors" :key="color" :color="color" rounded>
          {{ color }}
        </VBtn>
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Tile
      </AppCardTitle>

      <div class="flex flex-wrap gap-2">
        <VBtn v-for="color in colors" :key="color" :color="color" tile>
          {{ color }}
        </VBtn>
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Disabled
      </AppCardTitle>

      <div class="flex flex-wrap gap-2">
        <VBtn v-for="color in colors" :key="color" :color="color" disabled>
          {{ color }}
        </VBtn>
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Outlined
      </AppCardTitle>

      <div class="flex flex-wrap gap-2">
        <VBtn v-for="color in colors" :key="color" :color="color" outlined>
          {{ color }}
        </VBtn>
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Text
      </AppCardTitle>

      <div class="flex flex-wrap gap-2">
        <VBtn v-for="color in colors" :key="color" :color="color" text>
          {{ color }}
        </VBtn>
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Block
      </AppCardTitle>

      <div class="flex flex-wrap gap-2">
        <VBtn v-for="color in colors" :key="color" :color="color" block>
          {{ color }}
        </VBtn>
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Shadow
      </AppCardTitle>
      <div class="flex flex-wrap gap-2">
        <VBtn v-for="color in colors" :key="color" :color="color" shadow>
          {{ color }}
        </VBtn>
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Sizes
      </AppCardTitle>

      <div v-for="color in colors" :key="color" class="flex flex-wrap items-end gap-2 mb-2">
        <VBtn v-for="size in sizes" :key="size" :size="size" :color="color">
          {{ size }}
        </VBtn>
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Icons
      </AppCardTitle>

      <div class="flex flex-wrap items-end gap-2 mb-2">
        <VBtn prefix-icon="ri:search-2-line">
          Search
        </VBtn>
        <VBtn prefix-icon="ri:search-2-line" />
        <VBtn suffix-icon="ri:download-line">
          Download
        </VBtn>
        <VBtn suffix-icon="ri:download-line" />
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Floating Action Button (FAB)
      </AppCardTitle>

      <div class="flex flex-wrap items-end gap-2 mb-2">
        <VBtn size="sm" color="primary" fab prefix-icon="ri:add-line" />
        <VBtn color="secondary" fab prefix-icon="ri:add-line" />
        <VBtn size="lg" color="info" fab suffix-icon="ri:add-line" />
      </div>
    </AppCard>
  </div>
</template>
