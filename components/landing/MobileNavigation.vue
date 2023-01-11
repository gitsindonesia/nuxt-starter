<script setup lang="ts">
import type { MenuItem } from '~~/layouts/default.vue'

const props = defineProps<{
  menus: MenuItem[]
}>()

const { t } = useI18n()

const translatedMenus = computed(() => {
  return props.menus.map(item => ({
    ...item,
    text: t(item.text ?? ''),
  }))
})
</script>

<template>
  <div class="flex lg:hidden items-center w-full">
    <div class="flex items-center gap-2 justify-between flex-1">
      <VMenus :items="translatedMenus">
        <VBtn icon rounded fab text>
          <VIcon name="ic:menu" />
        </VBtn>
      </VMenus>

      <Logo
        width="80"
        height="36"
      />

      <div class="flex items-center">
        <ColorModeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  </div>
</template>
