import { Textarea } from '../components';

export default {
  title: 'Example/Forms',
  component: Textarea,
  argTypes: {
    grow: {
      control: 'boolean',
      defaultValue: 'true'
    },
    valid: {
      control: 'boolean',
      defaultValue: true
    },
    id: {
      control: 'text'
    },
    name: {
      control: 'text'
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
    rows: {
      control: 'number',
      defaultValue: 1
    },
    cols: {
      control: 'number',
      defaultValue: null
    },
    disabled: {
      control: 'boolean',
      defaultValue: false
    },
    readonly: {
      control: 'boolean',
      defaultValue: false
    },
    spellcheck: {
      control: 'boolean',
      defaultValue: false
    },
    resize: {
      control: {
        type: 'inline-radio',
        options: ['none', 'both', 'horizontal', 'vertical', 'initial', 'inherit']
      },
      defaultValue: 'none'
    }
  }
};

const Template = ({ ...args }) => ({
  Component: Textarea,
  props: args
});

export const TextArea = Template.bind({});
TextArea.storyName = 'Textarea';
