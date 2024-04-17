import { expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProductCard from './ProductCard.vue'

it('ProductCard.vue', async () => {
  const component = await mountSuspended(ProductCard, {
    props: {
      title: 'Macbook Pro',
      image: 'https://placekitten.com/200/300',
      description: 'The best laptop ever',
      category: 'Laptops',
    },
  })
  expect(component.text()).toContain('Macbook Pro')
  expect(component.text()).toContain('The best laptop ever')
  expect(component.text()).toContain('Laptops')
  expect(component.find('img').attributes('src')).toBe('https://placekitten.com/200/300')
})
