import BottomNav from '../views/BottomNav.svelte';

export default {
  title: 'Example/BottomNav',
  component: BottomNav,
  argTypes: {
    selected: {
      control: 'text',
      defaultValue: '/index'
    },
    loggedIn: {
      control: 'boolean',
      defaultValue: false
    },
    hideOnLarge: {
      control: 'boolean',
      defaultValue: true
    }
  }
};

const Template = ({ ...args }) => ({
  Component: BottomNav,
  props: args
});

export const BotNav = Template.bind({});
BotNav.storyName = 'BottomNav';
