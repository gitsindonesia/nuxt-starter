<script setup lang="ts">
import { Input } from '@morpheme/forms'
import { useField } from 'vee-validate'

const props = defineProps<{
  name: string
}>()

// The `name` is returned in a function because we want to make sure it stays reactive
// If the name changes you want `useField` to be able to pick it up
const { value, errorMessage } = useField<string>(() => props.name)
const isSecured = ref(true)
</script>

<template>
  <Input
    v-model="value"
    :name="name"
    :error="!!errorMessage"
    :error-message="errorMessage"
    :append-icon="isSecured ? 'untitled:eye-off' : 'untitled:eye'"
    :type="isSecured ? 'password' : 'text'"
    @click-append="isSecured = !isSecured"
  />
</template>
