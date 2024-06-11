<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndSmaller = breakpoints.smallerOrEqual('sm')

const route = useRoute()
</script>

<template>
  <div class="lg:min-h-svh flex flex-col gap-4 items-center justify-center">
    <div class="px-6 pt-6 lg:pt-20 flex justify-start lg:justify-center w-full">
      <NuxtLink to="/">
        <NuxtImg
          src="/logo.png"
          width="40"
          height="40"
          alt="Logo"
        />
      </NuxtLink>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-28 lg:p-20 lg:items-center lg:justify-between">
      <div class="flex justify-center">
        <NuxtImg
          src="https://images.unsplash.com/photo-1489769002049-ccd828976a6c?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Logo"
          height="423.02"
          class="rounded-xl"
        />
      </div>
      <slot />
    </div>
  </div>
</template>
