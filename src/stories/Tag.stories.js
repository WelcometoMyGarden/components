import { Tag } from '../components';
import { cyclistIcon } from '../images/icons';

export default {
  title: 'Example/Tag',
  component: Tag,
  argTypes: {
    icon: {
      control: 'object'
    },
    label: {
      control: 'text',
      defaultValue: 'Cyclist'
    },
    closeButton: {
      control: 'boolean',
      defaultValue: true
    },
    style: {
      control: 'text',
      defaultValue: 'background-color: yellow; display: inline-flex'
    }
  }
};

const Template = ({ ...args }) => ({
  Component: Tag,
  props: args
});

export const DefaultTag = Template.bind({});
DefaultTag.storyName = 'Tag';

export const TagWithIcon = Template.bind({});
TagWithIcon.args = {
  icon: cyclistIcon
};

export const TagWithoutCloseButton = Template.bind({});
TagWithoutCloseButton.args = {
  icon: cyclistIcon,
  closeButton: false
};
