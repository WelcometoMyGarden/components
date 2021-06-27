import { Progress } from '../components';

export default {
  title: 'Example/Progress',
  component: Progress,
  argTypes: {
    active: {
      control: 'boolean',
      defaultValue: 'true'
    },
    speed: {
      control: 'number',
      defaultValue: 0
    }
  }
};

const Template = ({ ...args }) => ({
  Component: Progress,
  props: args
});

export const ProgressBar = Template.bind({});
