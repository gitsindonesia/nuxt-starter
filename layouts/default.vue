<script setup lang="ts">
import { storeToRefs } from 'pinia'

useHead({
  title: 'Dashboard',
})

const layout = useLayoutStore()
const { miniSidebar } = storeToRefs(layout)
</script>

<template>
  <div class="flex flex-col sm:flex-row">
    <AppSidebar />

    <div
      :class="miniSidebar ? 'w-full sm:w-[calc(100vw-62px)]' : 'w-full sm:w-[calc(100vw-248px)]'"
      class="transition-all duration-300"
    >
      <AppHeaderBar />

      <div class="p-6">
        <slot />
      </div>
    </div>
  </div>
</template>
