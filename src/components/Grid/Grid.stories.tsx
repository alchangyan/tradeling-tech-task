import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Grid, { TGridProps } from './Grid';

const divColors = ['red', 'green', 'blue', 'yellow'];

export default {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    jest: ['Grid'],
  },
} as Meta;

const Template: Story<TGridProps> = args => (
  <Grid {...args}>
    {divColors.map((bgColor, index) => (
      <div key={index} style={{ backgroundColor: bgColor, height: 80 }}></div>
    ))}
  </Grid>
);

export const Default = Template.bind({});
Default.args = {};

export const Custom = Template.bind({});
Custom.args = {
  pattern: { lg: '10% 40% 40% 10%', sm: '50% 50%' },
  colGap: 10,
  rowGap: 10,
};
