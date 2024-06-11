// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', { disableVuex: true }],
    '@vueuse/nuxt',
    '@morpheme/nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    // uncomment to enable storybook
    // '@nuxtjs/storybook',
    '@nuxt/test-utils/module',
    '@nuxt/fonts',
    '@pinia-plugin-persistedstate/nuxt',
  ],

  runtimeConfig: {
    public: {
      gaId: '',
      apiUrl: '',
      appUrl: '',
    },
  },

  imports: {
    dirs: ['./api', './stores'],
  },

  // https://gitsindonesia.github.io/ui-component/
  morpheme: {
    darkMode: true,
    css: false,
    sass: true,
    theme: 'morpheme',
    transpileDeps: false,
    optimizeDeps: false,
  },

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/app.css'],
  
  components: [
    { path: '~/components/app', pathPrefix: false },
    { path: '~/components/ui', pathPrefix: false },

    // It's important that this comes last if you have overrides you wish to apply
    // to sub-directories of `~/components`.
    //
    // ~/components/Btn.vue => <Btn />
    // ~/components/base/Btn.vue => <BaseBtn />
    '~/components',
  ],
})
