<script setup lang="ts">
import type { MenuItem } from '~~/layouts/default.vue'

defineProps<{
  menus: MenuItem[]
}>()
</script>

<template>
  <VAppBar
    :style="{
      '--app-bar-height': 'auto',
    }"
    sticky
    class="sticky !z-20"
  >
    <!-- desktop -->
    <LandingDesktopNavigation :menus="menus" />

    <!-- mobile -->
    <LandingMobileNavigation :menus="menus" />
  </VAppBar>
</template>
