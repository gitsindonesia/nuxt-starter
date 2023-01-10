<script setup lang="ts">
import type { MenuItem } from '~~/layouts/default.vue'

defineProps<{
  menus: MenuItem[]
}>()
</script>

<template>
  <div
    class="hidden lg:container mx-auto px-4 sm:px-0 lg:flex gap-4 xl:gap-8
      items-center py-1 justify-between"
  >
    <Logo
      width="80"
      height="36"
    />

    <nav aria-label="Desktop Navigation">
      <ul class="flex justify-center gap-4">
        <LandingDesktopNavItem
          v-for="menu in menus"
          :key="menu.text"
          :menu="menu"
        />
      </ul>
    </nav>

    <div class="flex items-center gap-1">
      <ColorModeSwitcher />
      <LangSwitcher />
    </div>
  </div>
</template>
