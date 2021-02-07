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
  /**
   * custom pattern for grid items(colCount property will be ignored)
   */
  pattern?: string;
  /**
   * grid children
   */
  children?: React.ReactNode;
}

const defaultProps = {
  colCount: 1,
  colGap: 0,
  rowGap: 0,
  pattern: undefined,
};

const Grid: React.FC<TGridProps> = ({
  colCount,
  colGap,
  rowGap,
  pattern,
  children,
}) => {
  const gridStyles = React.useMemo(() => {
    if ((colCount || defaultProps.colCount) < 0) {
      logger('Amount of column should be above positive number', 'error');
      return defaultProps;
    }

    const gridTemplateColumns =
      pattern || Array(colCount).fill('auto').join(' ');

    return {
      gridTemplateColumns,
      gridColumnGap: colGap || defaultProps.colGap,
      gridRowGap: rowGap || defaultProps.rowGap,
    };
  }, [colCount, colGap, rowGap, pattern]);

  return (
    <div className="grid" style={gridStyles}>
      {children}
    </div>
  );
};

Grid.defaultProps = defaultProps;

export type { TGridProps };
export default Grid;
