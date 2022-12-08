<script setup lang="ts">
const menus = ref([
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Features',
    to: '#features',
  },
  {
    text: 'Review',
    to: '#review',
  },
  {
    text: 'Pricing',
    to: '#pricing',
  },
  {
    text: 'FAQs',
    to: '#faq',
  },
])

const mobileMenus = ref([
  ...menus.value,
  {
    divider: true,
  },
  { text: 'Sign in', to: '/auth/login' },
])
</script>

<template>
  <div class="bg-white">
    <VAppBar
      :style="{
        '--app-bar-bg-color': 'transparent',
        '--app-bar-height': 'auto',
      }"
    >
      <!-- desktop -->
      <div class="hidden container mx-auto sm:px-4 sm:flex gap-8 items-center py-3">
        <AppLogo class="h-8" />

        <nav class="flex-1">
          <ul class="flex gap-4">
            <li v-for="menu in menus" :key="menu.text">
              <NuxtLink :to="menu.to" class="text-sm px-3 py-2 rounded-full text-slate-700 hover:text-slate-900">
                {{ menu.text }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="flex gap-4">
          <VBtn rounded text to="/auth/login">
            Sign in
          </VBtn>
          <VBtn color="primary" rounded to="/auth/register">
            Get started today
          </VBtn>
        </div>
      </div>

      <!-- mobile -->
      <div class="flex sm:hidden items-center w-full">
        <AppLogo class="h-8" />
        <div class="flex items-center gap-2 justify-end flex-1">
          <VBtn color="primary" rounded to="/auth/register">
            Get started
          </VBtn>
          <VMenus :items="mobileMenus" right>
            <VBtn icon rounded fab>
              <VIcon name="ic:menu" />
            </VBtn>
          </VMenus>
        </div>
      </div>
    </VAppBar>

    <slot />

    <footer class="py-4">
      <div class="container mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center">
        <AppLogo class="h-6" />
        <div class="text-xs text-zinc-600">
          Copyright &copy; 2022. PT GITS Indonesia. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>
