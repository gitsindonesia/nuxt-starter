<script setup lang="ts">
import { TextareaInput } from '@morpheme/forms'
import { useField } from 'vee-validate'

const props = defineProps<{
  name: string
}>()

// The `name` is returned in a function because we want to make sure it stays reactive
// If the name changes you want `useField` to be able to pick it up
const { value, errorMessage } = useField(() => props.name)
</script>

<template>
  <TextareaInput
    v-model="value"
    :name="name"
    :error="!!errorMessage"
    :error-message="errorMessage"
  />
</template>
