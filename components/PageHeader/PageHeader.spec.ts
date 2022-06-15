import {test, expect} from 'vitest'
import { mount } from '@vue/test-utils'
import PageHeader from './PageHeader.vue'

test('mount component', async() => {
  expect(PageHeader).toBeTruthy()

  const wrapper = mount(PageHeader, {
    props: {
      modelValue: '',
    },
  })

  expect(wrapper.text()).toContain('Hello World')
})