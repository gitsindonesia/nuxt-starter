import { expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Welcome from './Welcome.vue'

it('Welcome.vue', async () => {
  const component = await mountSuspended(Welcome, {
    props: {
      //
    },
  })
  expect(component.text()).toContain('Welcome to Morpheme!')
  expect(component.text()).toContain('Get started')
  expect(component.text()).toContain('Start by editing this page in')
  expect(component.text()).toContain('View Product Page')
  expect(component.text()).toContain('Visit Documentation')
})
