import * as React from 'react';
import './Header.scss';

interface THeaderProps {}

const defaultProps = {};

const Header: React.FC<THeaderProps> = (): React.ReactElement<THeaderProps> => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src={process.env.PUBLIC_URL + '/octacat.png'}
        alt="github logo"
      />
      <div className="header__content">
        <h3 className="header__title">GitHub Searcher</h3>
        <div className="header__subtitle">
          Search users or repositories below
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = defaultProps;

export type { THeaderProps };
export default Header;
