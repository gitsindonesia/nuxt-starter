import {Story} from '@storybook/vue3';
import PageHeader from './PageHeader.vue';

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
  argTypes: {},
  args: {
    title: 'Title',
    breadcrumbs: [
      {
        title: 'Item 1',
        to: '/'
      }
    ]
  },
};

const Template: Story<{}> = (args) => ({
  components: {PageHeader},
  setup() {
    return {args};
  },
  template: `
    <PageHeader/>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'PageHeader';
