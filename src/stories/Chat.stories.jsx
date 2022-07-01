import React from 'react';

import { Chat } from '../Components/servicebox/Chat';

export default {
  title: 'Service/Box/Chat',
  component: Chat,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    layouts : { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Chat {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'ChitChat',
  message: ' You have a new message!',

};


Primary.parameters = {
  docs: {
    source: {
      code: `
      css  here
      
      ` ,
      language: "css",
      type: "dynamic",
    },
  },
};


export const Secondary = Template.bind({});
Secondary.args = {
  label: 'CHitChat 2',
  message: 'You have two messages!',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large Heading',
    message: 'You have two messages!',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'notice',
  
  message: 'You have two messages!',
};
