<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});

useHead({
  title: 'Home',
});
</script>

<template>
  <div>
    <v-card title="Welcome"> Welcome to your new GITS Project! </v-card>
  </div>
</template>
