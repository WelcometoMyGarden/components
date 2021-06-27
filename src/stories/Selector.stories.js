import Selector from '../components/Selector.svelte';

export default {
  title: 'Example/Selector',
  component: Selector,
  argTypes: {
    options: { control: 'object' },
    input: { action: 'input' }
  }
};

const Template = ({ input, ...args }) => ({
  Component: Selector,
  props: args,
  on: {
    input
  }
});

export const LanguageSelector = Template.bind({});
LanguageSelector.args = {
  options: [
    { value: 'en', text: 'English' },
    { value: 'fr', text: 'Français' },
    { value: 'nl', text: 'Nederlands' }
  ]
};
