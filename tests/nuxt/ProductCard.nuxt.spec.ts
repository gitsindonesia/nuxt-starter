import { describe, expect, it } from 'vitest'
import { mockComponent, mountSuspended } from 'vitest-environment-nuxt/utils'
import ProductCard from '~/components/Product/ProductCard.vue'

mockComponent('ProductCard', () => import('~/components/Product/ProductCard.vue'))

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
  })
})
