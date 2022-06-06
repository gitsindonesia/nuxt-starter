import GitsUI from '@gits-id/ui';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(GitsUI);
});
