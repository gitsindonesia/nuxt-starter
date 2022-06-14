---
to: components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.spec.ts
---
import {test, expect} from 'vitest'
import { mount } from '@vue/test-utils'
import <%= h.changeCase.pascal(name) %> from './<%= h.changeCase.pascal(name) %>.vue'

test('mount component', async() => {
  expect(<%= h.changeCase.pascal(name) %>).toBeTruthy()

  const wrapper = mount(<%= h.changeCase.pascal(name) %>, {
    props: {
      modelValue: '',
    },
  })

  expect(wrapper.text()).toContain('Hello World')
})