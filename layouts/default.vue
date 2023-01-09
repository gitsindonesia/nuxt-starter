<script setup lang="ts">
const route = useRoute()

const activeByHash = (hash: string) => route.hash === hash

const menus = ref([
  {
    text: 'Home',
    to: '/',
    isActive() {
      return route.path === '/' && !route.hash
    },
  },
  {
    text: 'Features',
    to: '/#features',
    isActive() {
      return activeByHash('#features')
    },
  },
  {
    text: 'Internalization',
    to: '/i18n',
  },
  {
    text: 'Docs',
    to: 'https://gitsindonesia.github.io/ui-component/',
    isExternal: true,
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
  <div class="flex flex-col min-h-screen">
    <VAppBar
      :style="{
        '--app-bar-height': 'auto',
      }"
      bordered
      sticky
      class="sticky !z-20"
    >
      <!-- desktop -->
      <div class="hidden lg:container mx-auto px-4 sm:px-0 lg:flex gap-4 xl:gap-8 items-center py-1">
        <VLogo size="md" />

        <nav class="flex-1">
          <ul class="flex gap-4">
            <li v-for="menu in menus" :key="menu.text">
              <NuxtLink
                :to="menu.to"
                class="text-sm px-3 py-2 rounded-full text-slate-600 hover:text-slate-900 flex items-center gap-2"
                exact
                :exact-active-class="menu.isActive ? '' : '!text-primary font-semibold'"
                :class="menu.isActive?.() ? '!text-primary font-semibold' : ''"
              >
                {{ menu.text }}

                <VIcon
                  v-if="menu.isExternal"
                  size="xs"
                  name="ri:external-link-line"
                />
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="flex gap-2">
          <VBtn prefix-icon="ri:moon-fill" fab text />
        </div>
      </div>

      <!-- mobile -->
      <div class="flex lg:hidden items-center w-full">
        <v-logo size="md" />
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

    <div class="flex-1">
      <slot />
    </div>

    <footer>
      <div class="container py-4 border-t mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center pr-6 2xl:px-0">
        <AppLogo class="h-6" />
        <div class="text-xs text-zinc-600">
          Copyright &copy; 2022. PT GITS Indonesia. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>
