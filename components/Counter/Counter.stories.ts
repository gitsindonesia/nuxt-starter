import {Story} from '@storybook/vue3';
import Counter from './Counter.vue';

export default {
  title: 'Components/Counter',
  component: Counter,
  argTypes: {},
  args: {
    modelValue: ''
  },
};

const Template: Story<{}> = (args) => ({
  components: {Counter},
  setup() {
    return {args};
  },
  template: `
    <Counter/>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Counter';
