<script lang="ts">
export default {
  inheritsAttrs: false,
}
</script>

<script setup lang="ts">

</script>

<template>
  <v-logo class="dark:hidden" v-bind="$attrs" />
  <v-logo class="hidden dark:block" white v-bind="$attrs" />
</template>
