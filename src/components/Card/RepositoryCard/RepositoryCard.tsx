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
  const date = lastUpdate
    ? `${Number(lastUpdate.getDate()) + 1}/${
        Number(lastUpdate.getMonth()) + 1
      }/${lastUpdate.getFullYear()}`
    : '-';

  return (
    <div className="repository-card">
      <h4 className="repository-card__name">
        <a href={href} target="_blank" rel="noreferrer" title={name}>
          @{name}
        </a>
      </h4>
      <div className="repository-card__description" title={description || ''}>
        {description}
      </div>
      <div className="repository-card__short-info">
        {language && (
          <span>
            <b>{language}</b>{' '}
          </span>
        )}
        <span className="repository-card__star">★</span> {`(${stars})`}
      </div>
      <div className="repository-card__last-update">
        <b>last update:</b> <span>{date}</span>
      </div>
      <div className="repository-card__owner">
        <img src={owner?.avatar} alt="avatar" />
        <a
          href={owner?.href}
          target="_blank"
          rel="noreferrer"
          title={owner?.name}
        >
          {owner?.name}
        </a>
      </div>
    </div>
  );
};

RepositoryCard.defaultProps = defaultProps;

export default RepositoryCard;
