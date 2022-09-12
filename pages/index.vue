<script setup lang="ts">
definePageMeta({
  layout: 'landing',
});

useHead({
  title: 'Home',
});
</script>

<template>
  <div>
    <HeroCentered
      title="GITS Starter Kit"
      subtitle="Rapidly build modern websites with GITS UI Component Library"
    >
      <template #actions>
        <div class="space-x-4 mt-10">
          <v-btn color="primary" size="lg">Get Started</v-btn>
          <v-btn size="lg" href="https://nuxt-gits-ui.vercel.app" new-tab>
            Live Demo
          </v-btn>
        </div>
      </template>
    </HeroCentered>

    <div class="container mx-auto">
      <!-- <HomeWelcome /> -->
    </div>
  </div>
</template>
