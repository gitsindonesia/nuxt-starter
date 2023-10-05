import { describe, expect, it } from 'vitest'
import { mockComponent, mountSuspended } from 'vitest-environment-nuxt/utils'
import Welcome from '~/components/Welcome/Welcome.vue'

mockComponent('Welcome', () => import('~/components/Welcome/Welcome.vue'))

describe('Welcome.vue', () => {
  it('can mount some component', async () => {
    const component = await mountSuspended(Welcome, {
      props: {
        //
      },
    })

    expect(component.text()).toContain('Welcome to Morpheme!')
    expect(component.text()).toContain('Get started')
    expect(component.text()).toContain('Start by editing this page in')
    expect(component.text()).toContain('Visit Documentation')
  })
})
