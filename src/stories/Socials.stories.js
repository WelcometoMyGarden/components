import Socials from '../views/Socials.svelte';

export default {
  title: 'Example/Socials',
  component: Socials,
  argTypes: {
    socials: {
      control: 'object',
      defaultValue: [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/Welcome2mygarden/',
          icon: '/icons/facebook.svg'
        },
        {
          name: 'Open Collective',
          url: 'https://opencollective.com/welcometomygarden',
          icon: '/icons/open-collective.svg'
        },
        {
          name: 'Github',
          url: 'https://github.com/welcometomygarden',
          icon: '/icons/github.svg'
        },
        {
          name: 'Slack',
          url:
            'https://join.slack.com/t/welcometomygarden/shared_invite/zt-f31i37dj-_zFgnfe40B6EexJuB2f_~w',
          icon: '/icons/slack.svg'
        },
        {
          name: 'Mail',
          url: 'mailto:support@welcometomygarden.org',
          icon: '/icons/email.svg'
        }
      ]
    },
    medium: { control: 'boolean', defaultValue: false },
    small: { control: 'boolean', defaultValue: false }
  }
};

const Template = ({ ...args }) => ({
  Component: Socials,
  props: args
});

export const S = Template.bind({});
S.storyName = 'Socials';
