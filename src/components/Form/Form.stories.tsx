import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Form, { TFormProps } from './Form';

export default {
  title: 'Components/Form',
  component: Form,
} as Meta;

const Template: Story<TFormProps> = args => (
  <Form {...args}/>
);

export const Default = Template.bind({});
Default.args = {};

