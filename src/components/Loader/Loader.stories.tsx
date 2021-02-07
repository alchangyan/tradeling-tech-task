import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Loader, { TLoaderProps } from './Loader';

export default {
  title: 'Components/Loader',
  component: Loader,
} as Meta;

const Template: Story<TLoaderProps> = args => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};
