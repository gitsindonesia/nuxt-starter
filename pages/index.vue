<template>
  <h1 class="text-2xl font-bold text-gray-800 mb-5">GITS UI Nuxt 3 Starter</h1>

  <h2 class="text-lg font-semibold mb-2">Alert</h2>
  <v-alert solid color="info" class="mb-4">Hello World</v-alert>

  <h2 class="text-lg font-semibold mb-2">Buttons</h2>
  <div class="space-x-2">
    <v-btn>default</v-btn>
    <v-btn color="primary">primary</v-btn>
    <v-btn color="secondary">secondary</v-btn>
  </div>

  <p class="mt-4">
    View full documentation of GITS UI
    <nuxt-link
      href="https://gits-ui.web.app/"
      target="_blank"
      class="text-primary font-bold"
      >here</nuxt-link
    >
  </p>
</template>