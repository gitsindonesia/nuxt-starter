<template>
  <VAppBar shadow="xl" class="py-3">
    <div class="container flex items-center justify-between mx-auto px-4">
      <slot name="logo">
        <AppLogo class="h-8" />
      </slot>
      <slot name="right" />
    </div>
  </VAppBar>
  <div class="container mx-auto p-4 sm:mt-3">
    <slot />
  </div>
</template>
