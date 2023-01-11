<script lang="ts">
export default {
  inheritsAttrs: false,
}
</script>

<template>
  <!-- logo default -->
  <nuxt-img
    src="/logo.webp"
    alt="Logo Base"
    class="dark:hidden"
    v-bind="$attrs"
  />
  <!-- logo white -->
  <nuxt-img
    src="/logo-white.webp"
    alt="Logo White"
    class="hidden dark:block"
    v-bind="$attrs"
  />
</template>
