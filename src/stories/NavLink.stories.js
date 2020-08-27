import NavLink from '../views/NavLink.svelte';

export default {
  title: 'Example/NavLink',
  component: NavLink,
  argTypes: {
    text: { control: 'text' },
    active: { type: 'boolean', defaultValue: false },
    href: { control: 'text' }
  }
};

const Template = ({ click, ...args }) => ({
  Component: NavLink,
  props: args,
  on: {
    click: click
  }
});

export const Link = Template.bind({});
Link.args = {
  text: 'Home',
  href: '/'
};

export const Active = Template.bind({});
Active.args = {
  text: 'Home',
  href: '/',
  active: true
};
