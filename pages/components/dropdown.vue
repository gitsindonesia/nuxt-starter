<script setup lang="ts">
import { VBtn } from '@gits-id/button'

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
</script>

<template>
  <AppPageTitle title="Dropdown" subtitle="Dropdown Component" />

  <div class="space-y-5">
    <AppCard>
      <AppCardTitle>
        Dropdown
      </AppCardTitle>

      <VDropdown :items="items" label="Dropdown" />
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Right
      </AppCardTitle>

      <VDropdown :items="items" label="Dropdown" right />
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Top
      </AppCardTitle>

      <VDropdown :items="items" label="Dropdown" top />
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Slots
      </AppCardTitle>

      <VDropdown label="Dropdown">
        <VDropdownItem text="Calendar" icon="ri:calendar-line" />
        <VDropdownItem text="Files" icon="ri:file-line" />
        <VDropdownItem divider />
        <VDropdownItem text="Timer" icon="ri:time-line" />
      </VDropdown>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Custom Activator
      </AppCardTitle>

      <VDropdown top top-class="bottom-12">
        <template #activator>
          <VDropdownButton :as="VBtn" color="error" outlined>
            My Button
          </VDropdownButton>
        </template>

        <VDropdownItem text="Calendar" icon="ri:calendar-line" />
        <VDropdownItem text="Files" icon="ri:file-line" />
        <VDropdownItem divider />
        <VDropdownItem text="Timer" icon="ri:time-line" />
      </VDropdown>
    </AppCard>
  </div>
</template>

