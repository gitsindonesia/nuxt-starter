<script setup lang="ts">
import type { MenuItem } from '~~/layouts/default.vue'

defineProps<{
  menu: MenuItem
}>()
</script>

<template>
  <li>
    <NuxtLink
      :to="menu.to"
      :href="menu.href"
      class="text-base px-3 py-2 rounded-full dark:text-gray-400 dark:hover:text-gray-100 text-gray-600 hover:text-gray-900 flex items-center gap-2"
      exact
      :exact-active-class="menu.isActive ? '' : '!text-primary-600 font-semibold'"
      :class="menu.isActive?.() ? '!text-primary-600 font-semibold' : ''"
      :target="menu.newTab ? '_blank' : undefined"
      :rel="menu.newTab ? 'noreferef' : undefined"
    >
      {{ $t(menu.text) }}

      <VIcon
        v-if="menu.isExternal"
        size="xs"
        name="ri:external-link-line"
      />
    </NuxtLink>
  </li>
</template>
