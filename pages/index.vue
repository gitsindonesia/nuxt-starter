<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})

useHead({
  title: 'Home',
})
</script>

<template>
  <LayoutsHeaderOnly>
    <div class="container mx-auto grid place-items-center sm:h-screen">
      <Counter />
    </div>
  </LayoutsHeaderOnly>
</template>
