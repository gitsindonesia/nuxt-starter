import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', { disableVuex: true }],
    '@vueuse/nuxt',
    '@gits-id/ui-nuxt',
    '@nuxtjs/partytown',
  ],
  runtimeConfig: {
    public: {
      gaId: '',
    },
  },
  vite: {
    optimizeDeps: {
      include: ['lodash/has', 'yup', 'axios'],
    },
  },
  partytown: {
    forward: ['dataLayer.push'],
  },
  app: {
    head: {
      script: [
        {
          children: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-44SPLJSV5C');`,
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-44SPLJSV5C',
          async: true,
          type: 'text/partytown',
        },
      ],
    },
  },
});
