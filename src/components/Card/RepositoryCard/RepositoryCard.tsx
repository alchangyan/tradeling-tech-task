import * as React from 'react';

import { TRepository } from '../../../redux/types';

import './RepositoryCard.scss';

const defaultProps = {};

const RepositoryCard = ({
  name,
  href,
  language,
  description,
  lastUpdate,
  stars,
  owner,
}: Partial<TRepository>): React.ReactElement<Partial<TRepository>> => {
  return <div className="repository-card">RepositoryCard</div>;
};

RepositoryCard.defaultProps = defaultProps;

export default RepositoryCard;
