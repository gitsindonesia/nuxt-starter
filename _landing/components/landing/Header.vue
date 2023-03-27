<script setup lang="ts">
import type { MenuItem } from '~~/layouts/default.vue'

defineProps<{
  menus: MenuItem[]
}>()
</script>

<template>
  <VAppBar
    class="sticky !z-20 !h-auto"
    elevate-on-scroll
    sticky
  >
    <!-- desktop -->
    <LandingDesktopNavigation :menus="menus" />

    <!-- mobile -->
    <LandingMobileNavigation :menus="menus" />
  </VAppBar>
</template>
