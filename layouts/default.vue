<script setup lang="ts">
useHead({
  title: 'Dashboard',
})
</script>

<template>
  <div class="flex flex-col sm:flex-row">
    <AppSidebar />

    <div
      class="sm:flex-1 transition-all duration-300"
    >
      <AppHeaderBar />

      <div class="p-6">
        <slot />
      </div>
    </div>
  </div>
</template>
