import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Select, { TSelectProps } from './Select';

const options = ['Option 1', 'Option 2', 'Option 3'];

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    jest: ['Select'],
  },
  args: {
    options,
    placeholder: 'Placeholder...',
    onChange: (v: string) => console.log(v),
  },
} as Meta;

const Template: Story<TSelectProps> = args => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithSelectedOption = Template.bind({});
WithSelectedOption.args = {
  defaultValue: options[1],
};
