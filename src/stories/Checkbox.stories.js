import { Checkbox } from '../components';
import { bonfireIcon } from '../images/icons';

export default {
  title: 'Example/Forms',
  component: Checkbox,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Label'
    },
    name: {
      control: 'text',
      defaultValue: 'checkbox'
    },
    checked: {
      control: 'boolean',
      defaultValue: false
    },
    disabled: {
      control: 'boolean',
      defaultValue: false
    },
    icon: {
      control: 'object'
    }
  }
};

const Template = ({ ...args }) => ({
  Component: Checkbox,
  props: args
});

export const Box = Template.bind({});
Box.storyName = 'Checkbox';

export const CheckboxWithIcon = Template.bind({});
CheckboxWithIcon.args = {
  icon: bonfireIcon
};
