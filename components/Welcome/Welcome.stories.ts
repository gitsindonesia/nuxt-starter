import type { Meta, StoryObj } from '@storybook/vue3'

import Welcome from './Welcome.vue'

const meta: Meta<typeof Welcome> = {
  component: Welcome,
}

export default meta

type Story = StoryObj<typeof Welcome>

export const Default: Story = {
  render: () => ({
    components: { Welcome },
    template: '<Welcome />',
  }),
}
