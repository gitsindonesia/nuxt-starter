<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <div class="flex-1 mt-8">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
