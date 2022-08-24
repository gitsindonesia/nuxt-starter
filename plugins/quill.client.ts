import { VQuillEditor } from '@gits-id/quill-editor';

export default defineNuxtPlugin((nuxtapp) => {
  nuxtapp.vueApp.component('VQuillEditor', VQuillEditor);
});
