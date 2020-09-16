import Brand from '../views/Brand.svelte';

export default {
  title: 'Example/Brand',
  component: Brand,
  argTypes: {
    logo: { control: 'text' },
    name: { type: 'text', defaultValue: 'Welcome To My Garden' },
    href: { control: 'text', defaultValue: '/' },
    hideName: { type: 'boolean', defaultValue: false },
    hideNameSmallerScreen: { type: 'boolean', defaultValue: true },
    height: { control: 'text', defaultValue: '7rem' }
  }
};

const Template = ({ click, ...args }) => ({
  Component: Brand,
  props: args,
  on: {
    click: click
  }
});

export const WithoutLogo = Template.bind({});
WithoutLogo.args = {
  hideNameSmallerScreen: false
};

export const WithoutLogoHiddenOnSmallerScreen = Template.bind({});

export const WithLogo = Template.bind({});
WithLogo.args = {
  logo: '/logo.svg'
};

export const WithLogoButNoName = Template.bind({});
WithLogoButNoName.args = {
  logo: '/logo.svg',
  hideName: true,
  hideNameSmallerScreen: false
};
