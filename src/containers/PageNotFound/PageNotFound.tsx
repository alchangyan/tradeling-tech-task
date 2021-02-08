import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';

import './PageNotFound.scss';

interface TPageNotFoundProps {}

const PageNotFound: React.FC<TPageNotFoundProps> = (): React.ReactElement<TPageNotFoundProps> => {
  const history = useHistory();

  const handleRedirect = React.useCallback(() => history && history.push('/'), [
    history,
  ]);

  return (
    <div className="page-not-found">
      <Header />
      <div className="page-not-found__background">
        <div className="emoji">
          <div className="emoji__eyes">
            <div className="emoji__eye"></div>
            <div className="emoji__eye"></div>
          </div>
          <div className="emoji__mouth" />
        </div>
      </div>
      <div className="page-not-found__404">404</div>
      <h2 className="page-not-found__title">Page Not Found...</h2>
      <h4 className="page-not-found__subtitle">
        ...so, you still have a chance to make one!!!
      </h4>
      <button onClick={handleRedirect}>or just go to homepage</button>
    </div>
  );
};

export type { TPageNotFoundProps };
export default PageNotFound;
