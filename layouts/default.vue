<script setup lang="ts">
useHead({
  title: 'Dashboard',
})
</script>

<template>
  <div class="flex flex-col sm:flex-row">
    <AppSidebar />

    <div
      class="w-full sm:w-[calc(100vw-248px)] transition-all duration-300"
    >
      <AppHeaderBar />

      <div class="p-6">
        <slot />
      </div>
    </div>
  </div>
</template>
