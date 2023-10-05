import { describe, expect, it } from 'vitest'
import { mockComponent, mountSuspended } from 'vitest-environment-nuxt/utils'
import ProductCard from '~/components/product/ProductCard.vue'

mockComponent('ProductCard', async () => {
  const { h } = await import('vue')
  return {
    setup() {
      return () => h('div', null, 'Mocked')
    },
  }
})

describe('ProductCard.vue', () => {
  it('can mount some component', async () => {
    const component = await mountSuspended(ProductCard, {
      props: {
        title: 'Test title',
        description: 'Test description',
        category: 'Test category',
        image: 'Test image',
      },
    })

    expect(component.text()).toContain('Test title')
    expect(component.text()).toContain('Test description')
    expect(component.text()).toContain('Test category')
  })
})
