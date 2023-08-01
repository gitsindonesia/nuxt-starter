// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', { disableVuex: true }],
    '@vueuse/nuxt',
    '@nuxtjs/fontaine',
    '@morpheme/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    'nuxt-vitest',
    '@vueuse/nuxt',
  ],

  runtimeConfig: {
    public: {
      gaId: '',
      apiUrl: '',
      appUrl: '',
    },
  },

  css: ['~/assets/css/global.scss'],

  imports: {
    dirs: ['./api', './stores'],
  },

  googleFonts: {
    prefetch: true,
    preconnect: true,
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  // https://gitsindonesia.github.io/ui-component/
  morpheme: {
    darkMode: true,
    css: false,
    sass: true,
    theme: 'morpheme',
  },

  // https://v8.i18n.nuxtjs.org
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.json',
        name: 'English',
      },
      {
        code: 'id',
        file: 'id-ID.json',
        name: 'Indonesia',
      },
      {
        code: 'fr',
        file: 'fr-FR.json',
        name: 'Français',
      },
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },

  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: '',
  },

  vite: {
    optimizeDeps: {
      include: ['yup'],
    },
  },

  // nuxt layer
  extends: [
    // comment this line to disable the default nuxt layer
    './_landing',
  ],

  devtools: {
    enabled: true,
  },
})
