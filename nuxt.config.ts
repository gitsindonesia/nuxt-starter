// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
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
  css: ['~/assets/css/global.css'],
  imports: {
    dirs: ['./api', './stores'],
  },
  vite: {
    server: {
      proxy: {
        '/random-users': {
          target: 'https://randomuser.me/api',
          ws: true,
        },
      },
    },
  },
  googleFonts: {
    prefetch: true,
    preconnect: true,
    useStylesheet: true,
    families: {
      Poppins: true,
    },
  },
})
