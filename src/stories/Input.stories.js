import { Input } from '../components';
import { emailIcon } from '../images/icons';

export default {
  title: 'Example/Forms',
  component: Input,
  argTypes: {
    isValid: {
      control: 'boolean',
      defaultValue: true
    },
    id: {
      control: 'text'
    },
    name: {
      control: 'text'
    },
    type: {
      control: 'text',
      defaultValue: 'text'
    },
    placeholder: {
      control: 'text',
      defaultValue: 'Enter a text'
    },
    required: {
      control: 'boolean',
      defaultValue: false
    },
    value: {
      control: 'text'
    },
    error: {
      control: 'text'
    },
    minLength: {
      control: 'number'
    },
    maxLength: {
      control: 'number'
    },
    testPattern: {
      control: 'text'
    },
    autocomplete: {
      control: 'text',
      defaultValue: 'on'
    },
    icon: {
      control: 'object'
    },
    list: {
      control: 'text'
    }
  }
};

const Template = ({ ...args }) => ({
  Component: Input,
  props: args
});

export const TextInput = Template.bind({});

export const TextInputWithIcon = Template.bind({});
TextInputWithIcon.args = {
  icon: emailIcon
};
