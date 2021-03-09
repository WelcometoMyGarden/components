import { Avatar } from '../components';

export default {
  title: 'Example/Avatar',
  component: Avatar,
  argTypes: {
    name: {
      control: 'text',
      defaultValue: 'John Doe'
    },
    large: {
      control: 'boolean',
      defaultValue: false
    },
    colors: {
      control: 'array',
      defaultValue: ['#EC9570', '#F6C4B7', '#F4E27E', '#59C29D', '#A2D0D3', '#2E5F63']
    }
  }
};

const Template = ({ ...args }) => ({
  Component: Avatar,
  props: args
});

export const Avtr = Template.bind({});
Avtr.storyName = 'Avatar';
