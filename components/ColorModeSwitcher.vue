<script setup lang="ts">
const colorMode = useColorMode()

const colorModeIcon = computed(() => {
  switch (colorMode.preference) {
    case 'light':
      return 'ri:sun-line'
    case 'dark':
      return 'ri:moon-line'
    case 'system':
    default:
      return 'ri:computer-line'
  }
})

function changeColorMode() {
  const values = ['system', 'light', 'dark']
  const index = values.indexOf(colorMode.preference)
  const next = (index + 1) % values.length
  colorMode.preference = values[next]
}
</script>

<template>
  <VBtn
    v-tooltip="{
      content: 'Switch color mode',
      placement: 'top',
    }"
    aria-label="Color Mode"
    fab
    text
    :prefix-icon="colorModeIcon"
    @click="changeColorMode"
  >
    <div class="sr-only">
      Switch color mode
    </div>
  </VBtn>
</template>
