import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Select, { TSelectProps } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;

const Template: Story<TSelectProps> = args => (
  <Select {...args}/>
);

export const Default = Template.bind({});
Default.args = {};

