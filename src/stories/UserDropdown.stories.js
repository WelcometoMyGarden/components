import UD from '../views/UserDropdown.svelte';

export default {
  title: 'Example/UserDropdown',
  component: UD,
  argTypes: {
    name: { control: 'text', defaultValue: 'John' }
  }
};

const Template = ({ ...args }) => ({
  Component: UD,
  props: args
});

export const UserDropdown = Template.bind({});
