import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import PageNotFound from './PageNotFound';

export default {
  title: 'Containers/PageNotFound',
  component: PageNotFound,
  parameters: {
    jest: ['PageNotFound'],
  },
} as Meta;

const Template: Story<{}> = args => <PageNotFound />;

export const Default = Template.bind({});
Default.args = {};
