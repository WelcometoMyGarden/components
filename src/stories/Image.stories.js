import { Image } from '../components';

export default {
  title: 'Example/Image',
  component: Image,
  argTypes: {
    src: {
      control: 'text',
      defaultValue:
        'https://openknowledge.be/static/56490ff7baaa640f84ebff5479056c43/ccdb5/illustration.webp'
    },
    style: {
      control: 'text',
      defaultValue: 'width: 50%'
    },
    alt: {
      control: 'text',
      defaultValue: 'Bike Data Project'
    }
  }
};

const Template = ({ ...args }) => ({
  Component: Image,
  props: args
});

export const Img = Template.bind({});
Img.storyName = 'Image';
