<script setup lang="ts">
import { Select } from '@morpheme/select'
import { useField } from 'vee-validate'

const props = defineProps<{
  name: string
}>()

// The `name` is returned in a function because we want to make sure it stays reactive
// If the name changes you want `useField` to be able to pick it up
const { value, errorMessage } = useField(() => props.name)
</script>

<template>
  <Select
    v-model="value"
    :name="name"
    :error="!!errorMessage"
    :error-message="errorMessage"
  />
</template>
