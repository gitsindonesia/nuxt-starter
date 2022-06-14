---
to: components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.stories.ts
---
import {Story} from '@storybook/vue3';
import <%= h.changeCase.pascal(name) %> from './<%= h.changeCase.pascal(name) %>.vue';

export default {
  title: 'Components/<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>,
  argTypes: {},
  args: {
    modelValue: ''
  },
};

const Template: Story<{}> = (args) => ({
  components: {<%= h.changeCase.pascal(name) %>},
  setup() {
    return {args};
  },
  template: `
    <<%= h.changeCase.pascal(name) %>/>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.storyName = '<%= h.changeCase.pascal(name) %>';
