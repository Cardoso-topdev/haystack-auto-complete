import { ComponentMeta, ComponentStory } from '@storybook/react';
import AutoComplete from '../components/AutoComplete';
import React from 'react';

export default {
  title: 'Example/AutoComplete',
  component: AutoComplete,
  argTypes: {
    backgroundColor: {},
  },
} as ComponentMeta<typeof AutoComplete>;

const Template: ComponentStory<typeof AutoComplete> = (args) => <AutoComplete {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};

export const Small = Template.bind({});
Small.args = {
  size: "small"
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium"
};
