import Text from '../views/Text.svelte';

export default {
  title: 'Example/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    is: { type: 'select', options: ['p', 'span', 'h2'], defaultValue: 'p' },
    size: { type: 'select', options: ['m', 'l'], defaultValue: 'm' },
    className: { control: 'text' },
    weight: { type: 'select', options: ['inherit', 'thin', 'bold'], defaultValue: 'inherit' }
  }
};

const Template = ({ click, ...args }) => ({
  Component: Text,
  props: args,
  on: {
    click: click
  }
});

export const Paragraph = Template.bind({});
Paragraph.args = {
  content:
    'Oat cake macaroon biscuit cookie cookie sweet jujubes. Gummies sweet roll apple pie. Biscuit muffin toffee apple pie tiramisu.'
};

export const LargeBoldParagraph = Template.bind({});
LargeBoldParagraph.args = {
  content:
    'Oat cake macaroon biscuit cookie cookie sweet jujubes. Gummies sweet roll apple pie. Biscuit muffin toffee apple pie tiramisu.',
  size: 'l',
  weight: 'bold'
};

export const ThinH2 = Template.bind();
ThinH2.args = {
  is: 'h2',
  content: 'Everyone deserves a holiday',
  weight: 'thin'
};
ThinH2.storyName = 'Thin H2';
