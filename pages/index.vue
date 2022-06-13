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
    <PageHeader title="Dashboard" />

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
      <v-stats title="Users" value="20" icon="ri:user-line" />
      <v-stats title="Posts" value="20" icon="ri:table-line" color="success" />
      <v-stats
        title="Comments"
        value="20"
        icon="ri:message-line"
        color="warning"
      />
      <v-stats title="Pages" value="5" icon="ri:book-line" color="error" />
    </div>

    <v-card title="Welcome" hide-footer class="mt-6">
      Welcome to your new GITS Project!
    </v-card>
  </div>
</template>
