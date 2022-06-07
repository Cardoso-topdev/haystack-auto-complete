import { ComponentMeta, ComponentStory } from '@storybook/react';
import AutoComplete from 'components/AutoComplete';
import React from 'react';

export default {
  title: 'AutoCompleteStory',
  component: AutoComplete,
  argTypes: {
    backgroundColor: {},
  },
} as ComponentMeta<typeof AutoComplete>;

const Template: ComponentStory<typeof AutoComplete> = (args) => <AutoComplete {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'AutoComplete1',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'AutoComplete2',
};
