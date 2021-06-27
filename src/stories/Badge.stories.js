import Badge from '../views/Badge.svelte';
import { showerIcon } from '../images/icons';

export default {
  title: 'Example/Badge',
  component: Badge,
  argTypes: {
    icon: {
      control: 'object',
      defaultValue: showerIcon
    },
    isSkeleton: {
      control: 'boolean',
      defaultValue: false
    },
    content: {
      control: 'text',
      defaultValue: 'Shower'
    }
  }
};

const Template = ({ ...args }) => ({
  Component: Badge,
  props: args
});

export const DefaultBadge = Template.bind({});
DefaultBadge.storyName = 'Badge';

export const SkeletonBadge = Template.bind({});
SkeletonBadge.args = {
  isSkeleton: true,
  icon: null,
  content: null
};
