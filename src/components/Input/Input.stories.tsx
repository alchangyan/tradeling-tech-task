import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Input, { TInputProps } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    jest: ['Input'],
  },
  args: {
    placeholder: 'Placeholder...',
    onChange: (v: string) => console.log(v),
  },
} as Meta;

const Template: Story<TInputProps> = args => (
  <div style={{ maxWidth: 400 }}>
    <Input {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  defaultValue: 'Default Value',
};

export const WithErrorMessage = Template.bind({});

WithErrorMessage.args = {
  errorMessage: 'Error message.',
};
