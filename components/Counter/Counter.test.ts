import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { setup } from '@nuxt/test-utils-edge'
import Counter from './Counter.vue'

test('mount component', async () => {
  await setup({
    // test context options
  })

  const wrapper = mount(Counter, {
    props: {},
  })

  expect(Counter).toBeTruthy()
  expect(wrapper.text()).toContain('Hello World')
})
