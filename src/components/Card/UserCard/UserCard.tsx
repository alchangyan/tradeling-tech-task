import * as React from 'react';

import { TUser } from '../../../redux/types';

import './UserCard.scss';

const defaultProps = {};

const UserCard: React.FC<TUser> = ({
  id,
  avatar,
  name,
  href,
}: TUser): React.ReactElement<TUser> => {
  return (
    <div className="user-card">
      <img className="user-card__avatar" src={avatar} alt="avatar" />
      <div className="user-card__content">
        <h3 className="user-card__profile-name">
          <a href={href} target="_blank" rel="noreferrer">
            @{name}
          </a>
        </h3>
        <div className="user-card__github-id">
          <b>GitHub ID:</b> <span>{id}</span>
        </div>
      </div>
    </div>
  );
};

UserCard.defaultProps = defaultProps;

export default UserCard;
