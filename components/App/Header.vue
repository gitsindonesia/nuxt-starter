<script setup lang="ts">
const menus = ref([
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Products',
    to: '/products',
  },
  {
    text: 'Solutions',
    to: '/solutions',
  },
  {
    text: 'Developers',
    to: '/developers',
  },
  {
    text: 'Pricing',
    to: '/pricing',
  },
  {
    text: 'Jobs',
    to: '/jobs',
  },
]);
</script>

<template>
  <header class="py-3 bg-white dark:bg-gray-800 dark:text-gray-300">
    <div class="container mx-auto">
      <div class="flex gap-8 items-center">
        <!-- brand logo / text -->
        <a href="#" class="text-primary font-semibold">
          <v-logo class="block dark:hidden" img-class="h-8" />
          <v-logo class="hidden dark:block" white img-class="h-8" />
        </a>
        <!-- nav -->
        <nav class="flex-1">
          <ul class="flex gap-6">
            <li v-for="menu in menus" :key="menu.text">
              <NuxtLink
                :to="menu.to"
                class="hover:text-primary transition duration-300"
                active-class="text-primary"
              >
                {{ menu.text }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="flex gap-4">
          <v-btn color="primary" outlined>Login</v-btn>
          <v-btn color="primary">Get Started</v-btn>

          <!-- <v-btn color="primary" rounded icon text>
            <v-icon name="ic:round-dark-mode" />
          </v-btn> -->
        </div>
      </div>
    </div>
  </header>
</template>
