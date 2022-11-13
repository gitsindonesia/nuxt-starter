// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/web-vitals'],
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
  googleAnalytics: {
    id: 'G-44SPLJSV5C',
  },
  css: ['~/assets/css/global.css'],
  imports: {
    dirs: ['./api', './composables', './stores'],
  },
  build: {
    transpile: ['floating-vue'],
  },
})
