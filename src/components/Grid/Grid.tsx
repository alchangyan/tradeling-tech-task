import * as React from 'react';

import logger from '../../helpers/logger';
import './Grid.scss';

interface TGridProps {
  /**
   * amount of columns
   */
  colCount?: number;
  /**
   * gap between columns
   */
  colGap?: number;
  /**
   * gap between rows
   */
  rowGap?: number;
}

const defaultProps = {
  colCount: 1,
  colGap: 0,
  rowGap: 0,
};

const Grid: React.FC<TGridProps> = ({ colCount, colGap, rowGap, children }) => {
  const gridStyles = React.useMemo(() => {
    if ((colCount || defaultProps.colCount) < 0) {
      logger('Amount of column should be above positive number', 'error')
      return defaultProps;
    }

    return {
      gridTemplateColumns: Array(colCount).fill('auto').join(' '),
      gridColumnGap: colGap || defaultProps.colGap,
      gridRowGap: rowGap || defaultProps.rowGap,
    };
  }, [colCount, colGap, rowGap]);

  return (
    <div className="grid" style={gridStyles}>
      {children}
    </div>
  );
};

Grid.defaultProps = defaultProps;

export type { TGridProps };
export default Grid;
