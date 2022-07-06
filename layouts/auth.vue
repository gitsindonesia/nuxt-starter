<script setup lang="ts">
import { Auth } from '@gits-id/ui';
</script>

<template>
  <Auth
    form-on-left
    form-wrapper-class="bg-white h-screen sm:h-auto"
    image-wrapper-class="hidden sm:block bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)]"
  >
    <template #image> &nbsp; </template>
    <slot />
  </Auth>
</template>
