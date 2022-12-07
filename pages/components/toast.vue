<script setup lang="ts">
import { defaultColors } from '@gits-id/theme/defaultTheme'
import type { ToastPlacement } from '@gits-id/toast'

const isOpen = ref(false)
const toast2 = ref(false)
const toast3 = ref(false)
const toastColor = ref(false)
const toastTimeout = ref(false)

const placement = ref('bottom')

const placements = ref<ToastPlacement[]>([
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'center',
])

const changePlacement = (position: string) => {
  placement.value = position
  toast3.value = false
  setTimeout(() => {
    toast3.value = true
  }, 200)
}

const currentColor = ref('default')

const changecolor = (color: string) => {
  currentColor.value = color
  toastColor.value = false
  setTimeout(() => {
    toastColor.value = true
  }, 200)
}

const colors = [...defaultColors, 'default', 'white']

const toastAction = ref(false)
const actionHandler = () => {
  alert('Confirmed!')
}
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

    <AppCard>
      <AppCardTitle>
        Timeout
      </AppCardTitle>

      <VBtn @click="toastTimeout = !toastTimeout">
        {{ toastTimeout ? 'Close' : 'Open' }} Toast
      </VBtn>

      <VToast v-model="toastTimeout" :timeout="5000">
        Toast will close in 5 seconds
        <template #action="{ close }">
          <VBtn text color="primary" @click="close">
            Close
          </VBtn>
        </template>
      </VToast>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        With Icon
      </AppCardTitle>

      <VBtn @click="toast2 = !toast2">
        {{ toast2 ? 'Close' : 'Open' }} Toast
      </VBtn>
      <VToast v-model="toast2" icon="ri:check-line">
        Toast message
      </VToast>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Placement
      </AppCardTitle>

      <VBtnGroup>
        <VBtn
          v-for="position in placements"
          :key="position"
          @click="changePlacement(position)"
        >
          {{ position }}
        </VBtn>
      </VBtnGroup>
      <VToast v-model="toast3" :placement="placement">
        Toast message
      </VToast>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Colors
      </AppCardTitle>

      <VBtnGroup>
        <VBtn
          v-for="color in colors"
          :key="color"
          :color="color"
          @click="changecolor(color)"
        >
          {{ color }}
        </VBtn>
      </VBtnGroup>
      <VToast v-model="toastColor" :color="currentColor">
        Toast message
      </VToast>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        With Action Slot
      </AppCardTitle>

      <VBtn @click="toastAction = !toastAction">
        {{ toastAction ? 'Close' : 'Open' }} Toast
      </VBtn>
      <VToast v-model="toastAction">
        Toast message
        <template #action="{ close }">
          <VBtn text size="sm" color="primary" @click="actionHandler">
            Action
          </VBtn>
          <VBtn
            text
            fab
            size="sm"
            color="primary"
            prefix-icon="ri:close-line"
            @click="close"
          />
        </template>
      </VToast>
    </AppCard>
  </div>
</template>
