<script setup lang="ts">
import type { VMenuItem } from '@morpheme/menus/dist/types/VMenus.vue'

export interface MenuItem extends VMenuItem {
  isActive?: () => boolean
  isExternal?: boolean
}

const route = useRoute()

const activeByHash = (hash: string) => route.hash === hash

const menus = ref<MenuItem[]>([
  {
    text: 'menu.home',
    to: '/',
    isActive() {
      return route.path === '/' && !route.hash
    },
  },
  {
    text: 'menu.features',
    to: '/#features',
    isActive() {
      return activeByHash('#features')
    },
  },
  {
    text: 'menu.internalization',
    to: '/i18n',
  },
  {
    text: 'menu.docs',
    href: 'https://gitsindonesia.github.io/ui-component/',
    newTab: true,
    isExternal: true,
  },
])
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <LandingHeader :menus="menus" />

    <div class="flex-1">
      <slot />
    </div>

    <LandingFooter />
  </div>
</template>
