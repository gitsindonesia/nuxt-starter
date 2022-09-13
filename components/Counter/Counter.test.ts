import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Counter from './Counter.vue';
import { setup } from '@nuxt/test-utils-edge';

test('mount component', async () => {
  await setup({
    // test context options
  });

  const wrapper = mount(Counter, {
    props: {},
  });

  expect(Counter).toBeTruthy();
  expect(wrapper.text()).toContain('Hello World');
});
