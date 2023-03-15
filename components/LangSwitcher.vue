<script setup lang="ts">
import { VBtn } from '@morpheme/ui'

const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const lang = computed(() => locales.value.map(item => ({
  text: item.name,
  to: switchLocalePath(item.code),
})))
</script>

<template>
  <VDropdown :items="lang" right panel-class="top-10">
    <template #activator>
      <VDropdownButton
        :as="VBtn"
        icon
        rounded
        fab
        text
      >
        <VIcon name="ic:round-translate" />
      </VDropdownButton>
    </template>
  </VDropdown>
</template>
