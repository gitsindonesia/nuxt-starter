<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
})
</script>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { RouteLocation } from 'vue-router'

type LinkProps = Omit<InstanceType<typeof RouterLink>['$props'], 'to'>

interface Props {
  to?: RouteLocation | string
  linkAttrs?: LinkProps
}

withDefaults(defineProps<Props>(), {
  linkAttrs: () => ({} as LinkProps),
  to: '/',
})
</script>

<template>
  <RouterLink :to="to" v-bind="linkAttrs">
    <img
      src="/logo.webp"
      alt="Logo"
      width="90"
      height="40"
      class="object-contain"
      v-bind="$attrs"
    >
  </RouterLink>
</template>
