import { VQuillEditor } from '@gits-id/quill-editor';
import '@gits-id/quill-editor/dist/style.css';

export default defineNuxtPlugin((nuxtapp) => {
  nuxtapp.vueApp.component('VQuillEditor', VQuillEditor);
});
