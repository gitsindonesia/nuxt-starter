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
    '@nuxtjs/partytown',
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
  // https://github.com/nuxt-modules/partytown
  partytown: {
    forward: ['dataLayer.push'],
  },
  app: {
    head: {
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-3LVV82VFCV',
          async: true,
          type: 'text/partytown',
        },
        {
          children: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-3LVV82VFCV');`,
          async: true,
          type: 'text/partytown',
        },
      ],
    },
  },
  vite: {
    optimizeDeps: {
      include: ['yup'],
    },
  },
  // nuxt layer
  extends: [
    './_landing',
  ],
})
