<script setup lang="ts">
import { defaultRounded } from '@gits-id/theme/defaultTheme'
import { colors } from '~/constants'
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
        Outlined
      </AppCardTitle>

      <div class="space-x-2">
        <VBadge v-for="color in colors" :key="color" :color="color" outlined>
          {{ color }}
        </VBadge>
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Dismissable
      </AppCardTitle>

      <div class="space-x-2">
        <VBadge v-for="color in colors" :key="color" :color="color" dismissable>
          {{ color }}
        </VBadge>
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Rounded
      </AppCardTitle>

      <div class="space-x-2">
        <VBadge
          v-for="rounded in defaultRounded"
          :key="String(rounded)"
          :rounded="rounded"
          color="primary"
        >
          {{ rounded }}
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
        Badge Notification
      </AppCardTitle>

      <div class="space-x-4">
        <VBtn
          prefix-icon="ri:notification-4-line"
          fab
          class="relative"
        >
          <VBadge
            color="error"
            class="absolute h-6 w-6 justify-center -top-1 -right-2"
            small
            rounded="full"
          >
            20
          </VBadge>
        </VBtn>
        <VBtn
          prefix-icon="ri:notification-4-line"
          fab
          color="primary"
          class="relative"
        >
          <VBadge
            color="error"
            class="absolute h-6 w-6 justify-center -top-1 -right-2"
            small
            rounded="full"
          >
            20
          </VBadge>
        </VBtn>
        <VBtn
          prefix-icon="ri:notification-4-line"
          fab
          text
          class="relative"
        >
          <VBadge
            color="error"
            class="absolute h-6 w-6 justify-center -top-1 -right-2"
            small
            rounded="full"
          >
            20
          </VBadge>
        </VBtn>
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Badge List
      </AppCardTitle>

      <div class="space-x-2">
        <VList class="sm:w-80 border rounded p-1">
          <VListItem prepend-icon="ri:mail-line" hover>
            Inbox
            <template #append>
              <VBadge color="primary">
                20
              </VBadge>
            </template>
          </VListItem>
          <VListItem prepend-icon="ri:notification-line" hover>
            Notification
            <template #append>
              <VBadge color="error">
                40
              </VBadge>
            </template>
          </VListItem>
          <VListItem prepend-icon="ri:refresh-line" hover>
            Updates
            <template #append>
              <VBadge color="warning">
                50
              </VBadge>
            </template>
          </VListItem>
        </VList>
      </div>
    </AppCard>
  </div>
</template>

