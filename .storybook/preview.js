import { app } from '@storybook/vue3';
import GitsUi from '@gits-id/ui'
import '../assets/css/tailwind.css';
import '../assets/css/global.scss';
import '@gits-id/ui/styles'

// use GITS UI
app.use(GitsUi)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}