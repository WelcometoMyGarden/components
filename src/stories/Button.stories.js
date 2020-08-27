import Button from '../views/Button.svelte';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    type: { type: 'select', options: ['submit', 'button', 'reset'] },
    href: { control: 'text' },
    inverse: { control: 'boolean' },
    uppercase: { control: 'boolean' },
    fit: { control: 'boolean', defaultValue: true },
    medium: { control: 'boolean' },
    small: { control: 'boolean' },
    target: { type: 'select', options: ['_blank', '_self', '_parent', '_top'] },
    disabled: { control: 'boolean' },
    click: { action: 'click' }
  }
};

const Template = ({ click, ...args }) => ({
  Component: Button,
  props: args,
  on: {
    click: click
  }
});

export const Uppercase = Template.bind({});
Uppercase.args = {
  uppercase: true,
  label: 'Button'
};

export const Inverse = Template.bind({});
Inverse.args = {
  uppercase: true,
  label: 'Button',
  inverse: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  uppercase: true,
  label: 'Button',
  disabled: true
};

export const Anchor = Template.bind({});
Anchor.args = {
  label: 'Welcome To My Garden',
  href: 'https://welcometomygarden.org/',
  target: '_blank',
  fit: false
};
