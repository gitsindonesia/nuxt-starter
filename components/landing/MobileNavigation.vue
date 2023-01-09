<script setup lang="ts">
import type { MenuItem } from '~~/layouts/default.vue'

defineProps<{
  menus: MenuItem[]
}>()
</script>

<template>
  <div class="flex lg:hidden items-center w-full">
    <div class="flex items-center gap-2 justify-between flex-1">
      <VMenus :items="menus">
        <VBtn icon rounded fab text>
          <VIcon name="ic:menu" />
        </VBtn>
      </VMenus>

      <Logo size="md" class="flex-1" img-class="mx-auto" />

      <div class="flex items-center">
        <ColorModeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  </div>
</template>
