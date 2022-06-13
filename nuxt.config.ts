import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@gits-id/ui-nuxt',
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', { disableVuex: true }],
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
