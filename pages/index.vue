<script setup lang="ts">
import { useAuthStore } from '~~/stores/auth';

definePageMeta({
  layout: 'blank',
});

useHead({
  title: 'Home',
});

const { loggedIn } = useAuthStore();
</script>

<template>
  <div class="container mx-auto grid place-items-center sm:h-screen">
    <Counter />
  </div>
</template>
