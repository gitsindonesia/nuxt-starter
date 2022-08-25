import { defineNuxtConfig } from 'nuxt';

const transpile = [
  '@headlessui/vue',
  '@heroicons/vue',
  '@gits-id/ui',
  '@gits-id/alert',
  '@gits-id/app-bar',
  '@gits-id/badge',
  '@gits-id/breadcrumbs',
  '@gits-id/button',
  '@gits-id/card',
  '@gits-id/collapsible',
  '@gits-id/container',
  '@gits-id/dropdown',
  '@gits-id/editor',
  '@gits-id/forms',
  '@gits-id/icon',
  '@gits-id/layouts',
  '@gits-id/list',
  '@gits-id/logo',
  '@gits-id/menu',
  '@gits-id/menus',
  '@gits-id/modal',
  '@gits-id/multi-select',
  '@gits-id/nav-drawer',
  '@gits-id/navbar',
  '@gits-id/pages',
  '@gits-id/pagination',
  '@gits-id/progress-bar',
  '@gits-id/select',
  '@gits-id/services',
  '@gits-id/spinner',
  '@gits-id/stats',
  '@gits-id/switch',
  '@gits-id/table',
  '@gits-id/tabs',
  '@gits-id/textarea',
  '@gits-id/theme',
  '@gits-id/toast',
  '@gits-id/tooltip',
  '@gits-id/utils',
];

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', { disableVuex: true }],
    '@vueuse/nuxt',
    '@gits-id/ui-nuxt',
  ],
  runtimeConfig: {
    public: {
      gaId: '',
    },
  },
  vite: {
    optimizeDeps: {
      include: transpile,
    },
  },
  build: {
    transpile,
  },
});
