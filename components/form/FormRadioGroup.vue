<script setup lang="ts">
import { useField } from 'vee-validate'
import type { RadioGroupItem } from '../app/RadioGroup.vue'

const props = defineProps<{
  name: string
  items: RadioGroupItem[]
}>()

// The `name` is returned in a function because we want to make sure it stays reactive
// If the name changes you want `useField` to be able to pick it up
const { value, errorMessage } = useField(() => props.name)
</script>

<template>
  <RadioGroup
    v-model="value"
    :items="items"
    :name="name"
    :error="!!errorMessage"
    :error-message="errorMessage"
  />
</template>
