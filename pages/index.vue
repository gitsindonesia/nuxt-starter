<template>
  <div>
    <h1 class="text-2xl font-bold text-gray-800 mb-5">
      GITS UI Nuxt 3 Starter
    </h1>

    <h2 class="text-lg font-semibold mb-2">Alert</h2>
    <v-alert solid color="primary" class="mb-4">Hello World</v-alert>
    <v-alert outlined dismissable color="info" class="mb-4"
      >Hello World</v-alert
    >

    <h2 class="text-lg font-semibold mb-2">Buttons</h2>
    <div class="space-x-2">
      <v-btn>default</v-btn>
      <v-btn color="primary">primary</v-btn>
      <v-btn color="secondary">secondary</v-btn>
    </div>

    <h2 class="text-lg font-semibold mb-2 mt-5">Forms</h2>
    <div class="">
      <v-input placeholder="Name" label="Name" />
      <div class="mt-2">
        <v-textarea placeholder="Description" label="Description" />
      </div>
    </div>

    <v-alert color="primary" class="mt-4">
      <div class="text-gray-800 inline mr-0.5">
        View full documentation of GITS UI
      </div>
      <nuxt-link
        href="https://gits-ui.web.app/"
        target="_blank"
        class="text-primary font-semibold"
      >
        here
      </nuxt-link>
    </v-alert>
  </div>
</template>
