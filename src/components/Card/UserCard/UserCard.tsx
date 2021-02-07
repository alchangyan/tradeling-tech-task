import * as React from 'react';

import { TUser } from '../../../redux/types';

import './UserCard.scss';

const defaultProps = {};

const UserCard = ({
  avatar,
  name,
  href,
}: Partial<TUser>): React.ReactElement<Partial<TUser>> => {
  return <div className="user-card">UserCard</div>;
};

UserCard.defaultProps = defaultProps;

export default UserCard;
