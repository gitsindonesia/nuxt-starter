<script setup lang="ts">
import {
  RadioGroup as HRadioGroup,
  RadioGroupOption as HRadioGroupOption,
} from '@headlessui/vue'

export interface RadioGroupItem {
  label: string
  value: string
}

const { items } = defineProps<{
  items: RadioGroupItem[]
}>()

const modelValue = defineModel<string>()
</script>

<template>
  <HRadioGroup v-model="modelValue" class="divide-y">
    <HRadioGroupOption
      v-for="(item, index) in items"
      v-slot="{ checked }"
      :key="index"
      :value="item.value"
      class="flex items-center gap-2 justify-between py-3"
    >
      <span class="text-sm font-medium select-none">
        {{ item.label }}
      </span>
      <div
        class="size-5 flex items-center justify-center rounded-full"
        :class="checked ? 'bg-pertamina-blue-700' : 'border border-gray-300'"
      >
        <div class="size-2 rounded-full bg-white" />
      </div>
    </HRadioGroupOption>
  </HRadioGroup>
</template>
