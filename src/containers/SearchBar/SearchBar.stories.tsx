import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SearchBar, { TSearchBarProps } from './SearchBar';

export default {
  title: 'Containers/SearchBar',
  component: SearchBar,
  parameters: {
    jest: ['SearchBar'],
  },
} as Meta;

const Template: Story<TSearchBarProps> = args => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
