import * as React from 'react';
import classnames from 'classnames';
import { useSelector } from 'react-redux';

import type { TUser, TRepository, TStore } from '../../redux/types';
import Header from '../../components/Header';
import Grid from '../../components/Grid';
import Card from '../../components/Card';
import SearchBar from '../SearchBar';

import './Main.scss';

interface TMainProps {}

const Main: React.FC<TMainProps> = (): React.ReactElement<TMainProps> => {
  const gridPattern = { lg: 'auto auto auto', sm: 'auto auto' };
  const { isSearchbarActive, results } = useSelector(
    (state: TStore) => state.search,
  );

  return (
    <div className="main">
      <div
        className={classnames({
          'floating-block': true,
          'floating-block_active': !isSearchbarActive,
        })}
      >
        <Header />
        <SearchBar />
      </div>
      <Grid pattern={gridPattern} colGap={20} rowGap={20}>
        {results.map((item: TRepository | TUser) => (
          <Card key={item.id} data={item} />
        ))}
      </Grid>
    </div>
  );
};

export type { TMainProps };
export default Main;
