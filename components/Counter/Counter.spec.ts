import {test, expect} from 'vitest'
import { mount } from '@vue/test-utils'
import Counter from './Counter.vue'

test('mount component', async() => {
  expect(Counter).toBeTruthy()

  const wrapper = mount(Counter, {
    props: {
      modelValue: '',
    },
  })

  expect(wrapper.text()).toContain('Hello World')
})