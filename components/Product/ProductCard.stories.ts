import type { Meta, StoryObj } from '@storybook/vue3'

import ProductCard from './ProductCard.vue'

const meta: Meta<typeof ProductCard> = {
  component: ProductCard,
}

export default meta

type Story = StoryObj<typeof ProductCard>

export const Default: Story = {
  render: () => ({
    components: { ProductCard },
    template: `
      <ProductCard
        title="Product Title"
        description="Product Description"
        category="Product Category"
        image="https://picsum.photos/200/300"
      />
    `,
  }),
}
