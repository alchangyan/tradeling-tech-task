import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Main, { TMainProps } from './Main';

export default {
  title: 'Containers/Main',
  component: Main,
} as Meta;

const Template: Story<TMainProps> = args => (
  <Main {...args}></Main>
);

export const Default = Template.bind({});
Default.args = {};

