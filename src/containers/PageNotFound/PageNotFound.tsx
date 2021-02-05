import * as React from 'react';

interface TPageNotFoundProps {};

const PageNotFound: React.FC<TPageNotFoundProps> = props => {
  return <div className="page-not-found">Page Not Found</div>;
};

export type { TPageNotFoundProps };
export default PageNotFound;
