import { ComponentMeta, ComponentStory } from '@storybook/react';
import AutoComplete from '.';
import React, { useEffect, useState } from 'react';
import { AutoCompleteItem } from 'types';

export default {
  title: 'Example/AutoComplete',
  component: AutoComplete,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium']
      }
    }
  },
} as ComponentMeta<typeof AutoComplete>;

const tempData: Array<AutoCompleteItem> = [
  { title: 'Menu item 1', value: 1 },
  { title: 'Menu item 2', value: 2 },
  { title: 'Menu item 3', value: 3 },
  { title: 'Menu item 4', value: 4 },
  { title: 'Menu item 5', value: 5 },
  { title: 'Menu item 6', value: 6 },
  { title: 'Menu item 7', value: 7 },
  { title: 'Menu item 8', value: 8 },
  { title: 'Menu item 9', value: 9 },
  { title: 'Menu item 10', value: 10 },
  { title: 'Menu item 11', value: 11 },
  { title: 'Menu item 12', value: 12 },
  { title: 'Menu item 13', value: 13 },
  { title: 'Menu item 14', value: 14 },
  { title: 'Menu item 15', value: 15 },
  { title: 'Menu item 16', value: 16 },
  { title: 'Menu item 17', value: 17 },
  { title: 'Menu item 18', value: 18 },
  { title: 'Menu item 19', value: 19 },
  { title: 'Menu item 20', value: 20 },
];

const Template: ComponentStory<typeof AutoComplete> = (args) => {
  const [value, setValue] = useState<number[] | number | null>(null);
  const onChange = (event: any, value: any) => {
    setValue(value);
  }

  const [value2, setValue2] = useState<number[] | number | null>(null);
  const onChange2 = (event: any, value: any) => {
    setValue2(value);
  }

  useEffect(() => {
    setValue(null);
    setValue2(null);
  }, [args.multiple]);

  return (<>
    <AutoComplete
      {...args}
      onChange={onChange}
      value={value}
    />
  </>)
};

export const Default = Template.bind({});

Default.args = {
  size: 'small',
  options: tempData,
  label: 'Label',
  placeHolder: 'Value',
  multiple: true,
  width: 320
};
