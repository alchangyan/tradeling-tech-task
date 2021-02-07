import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Card, { TCardProps } from './Card';
import { TRepository, TUser } from '../../redux/types';

const userData: TUser = {
  id: 22478974,
  type: 'user',
  avatar: 'https://avatars.githubusercontent.com/u/22478974?v=4',
  name: 'alchangyan',
  href: 'https://github.com/alchangyan',
};

const repositoryData: TRepository = {
  id: 335276095,
  type: 'repository',
  name: 'tradeling-tech-task',
  href: 'https://github.com/alchangyan/tradeling-tech-task',
  language: 'TypeScript',
  description: null,
  lastUpdate: '2021-02-07T14:36:53Z',
  stars: 1,
  owner: 'alchangyan',
};

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<TCardProps> = args => (
  <div style={{ maxWidth: 400 }}>
    <Card {...args} />
  </div>
);

export const UserCard = Template.bind({});
UserCard.args = {
  data: userData,
};

export const RepositoryCard = Template.bind({});
RepositoryCard.args = {
  data: repositoryData,
};
