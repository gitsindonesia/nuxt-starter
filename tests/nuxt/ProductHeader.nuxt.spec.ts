import { describe, expect, it } from 'vitest'
import { mockComponent, mountSuspended } from 'vitest-environment-nuxt/utils'
import ProductHeader from '~/components/Product/ProductHeader.vue'

mockComponent('ProductHeader', () => import('~/components/Product/ProductHeader.vue'))

describe('ProductHeader.vue', () => {
  it('can mount some component', async () => {
    const component = await mountSuspended(ProductHeader, {
      props: {
        //
      },
    })

    expect(component.text()).toContain('Morpheme')
  })
})
