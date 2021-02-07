import * as React from 'react';
import classnames from 'classnames';
import { useSelector } from 'react-redux';

import type { TStore } from '../../redux/store';
import Header from '../../components/Header';
import SearchBar from '../SearchBar';

import './Main.scss';

interface TMainProps {}

const Main: React.FC<TMainProps> = props => {
  const { isSearchbarActive } = useSelector((state: TStore) => state.search);

  return (
    <div className="main">
      <div
        className={classnames({
          'floating-block': true,
          'floating-block_active': isSearchbarActive,
        })}
      >
        <Header />
        <SearchBar />
      </div>
    </div>
  );
};

export type { TMainProps };
export default Main;
