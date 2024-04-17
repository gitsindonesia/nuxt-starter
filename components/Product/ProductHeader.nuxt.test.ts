import { expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProductHeader from './ProductHeader.vue'

it('ProductHeader.vue', async () => {
  const component = await mountSuspended(ProductHeader, {
    props: {
      //
    },
  })
  expect(component.text()).toContain('Morpheme')
  expect(component.text()).toContain('Back to Home')
})
