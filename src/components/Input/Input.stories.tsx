import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Input, { TInputProps } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<TInputProps> = args => (
  <Input {...args}/>
);

export const Default = Template.bind({});
Default.args = {};

