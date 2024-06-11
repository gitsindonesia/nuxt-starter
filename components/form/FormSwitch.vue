<script setup lang="ts">
import { useField } from 'vee-validate'
import { Switch } from '~/components/ui/switch'

const props = defineProps<{
  name: string
}>()

// The `name` is returned in a function because we want to make sure it stays reactive
// If the name changes you want `useField` to be able to pick it up
const { value, errorMessage } = useField<boolean>(() => props.name)
</script>

<template>
  <Switch
    v-model:checked="value"
    :name="name"
  />
</template>
