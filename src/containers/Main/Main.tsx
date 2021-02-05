import * as React from 'react';
import Header from '../../components/Header';

interface TMainProps {}

const Main: React.FC<TMainProps> = props => {
  return (
    <div className="main">
      <Header />
    </div>
  );
};

export type { TMainProps };
export default Main;
