import Notifications from '../views/Notifications.svelte';

export default {
  title: 'Example/Notifications',
  component: Notifications,
  argTypes: {}
};

const Template = ({ ...args }) => ({
  Component: Notifications,
  props: args
});

export const Notifs = Template.bind({});
Notifs.storyName = 'Notifications';
