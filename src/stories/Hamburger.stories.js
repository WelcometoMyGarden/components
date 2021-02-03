import Hamburger from '../components/Hamburger.svelte';

export default {
  title: 'Example/Hamburger',
  component: Hamburger
};

const Template = () => ({
  Component: Hamburger
});

export const TheHamburger = Template.bind({});
