import * as React from 'react';

import { TRepository, TUser } from '../../redux/types';
import RepositoryCard from './RepositoryCard';
import UserCard from './UserCard';

import './Card.scss';

interface TCardProps {
  data: TRepository | TUser;
}

const defaultProps = {};

const Card: React.FC<TCardProps> = ({
  data,
}: TCardProps): React.ReactElement<TCardProps> => {
  return (
    <div className="card">
      {data.type === 'user' && <UserCard {...data} />}
      {data.type === 'repository' && <RepositoryCard {...data} />}
    </div>
  );
};

Card.defaultProps = defaultProps;

export type { TCardProps };
export default Card;
