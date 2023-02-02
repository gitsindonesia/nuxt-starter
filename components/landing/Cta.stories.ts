import type { Meta, StoryFn } from '@storybook/vue3'
import Cta from './Cta.vue'

export default {
  title: 'Landing/Cta',
  component: Cta,
} as Meta<typeof Cta>

export const Default: StoryFn<typeof Cta> = () => ({
  components: { Cta },
  template: '<Cta />',
})
Default.storyName = 'Cta'
