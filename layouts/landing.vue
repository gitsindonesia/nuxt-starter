<script setup lang="ts">
const menus = ref([
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Features',
    href: '#features',
  },
  {
    text: 'Review',
    href: '#review',
  },
  {
    text: 'Pricing',
    href: '#pricing',
  },
  {
    text: 'FAQs',
    href: '#faq',
  },
  {
    text: 'Store',
    to: '/products',
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
      <div class="hidden lg:container mx-auto px-4 sm:px-0 lg:flex gap-4 xl:gap-8 items-center py-3">
        <AppLogo class="h-8" />

        <nav class="flex-1">
          <ul class="flex gap-4">
            <li v-for="menu in menus" :key="menu.text">
              <NuxtLink
                :to="menu.to ? menu.to : undefined"
                :href="menu.href"
                class="text-sm px-3 py-2 rounded-full text-slate-700 hover:text-slate-900"
                exact
                exact-active-class="!text-primary font-semibold"
              >
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
      <div class="flex lg:hidden items-center w-full">
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

    <footer class="">
      <div class="container py-4 border-t mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center">
        <AppLogo class="h-6" />
        <div class="text-xs text-zinc-600">
          Copyright &copy; 2022. PT GITS Indonesia. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>
