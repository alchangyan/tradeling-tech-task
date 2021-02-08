import * as React from 'react';
import './Loader.scss';

interface TLoaderProps {}

const defaultProps = {};

const Loader: React.FC<TLoaderProps> = (): React.ReactElement<TLoaderProps> => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div className="loader">
      <div className="spinner" />
    </div>
  );
};

Loader.defaultProps = defaultProps;

export type { TLoaderProps };
export default Loader;
