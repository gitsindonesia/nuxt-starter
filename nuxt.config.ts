import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@gits-id/ui-nuxt',
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', { disableVuex: true }],
    '@vueuse/nuxt',
  ],
  vite: {
    optimizeDeps: {
      include: [
        '@ckeditor/ckeditor5-build-classic',
        '@ckeditor/ckeditor5-vue',
        'lodash',
        'lodash/has',
        'property-expr',
        'yup',
        'axios',
      ],
    },
  },
});
