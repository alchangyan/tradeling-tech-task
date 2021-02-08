import * as React from 'react';

import './Grid.scss';

interface TGridProps {
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
  children?: React.ReactNode | React.ReactNode[];
}

const defaultProps = {
  colGap: 0,
  rowGap: 0,
  pattern: undefined,
};

const Grid: React.FC<TGridProps> = ({
  colGap,
  rowGap,
  pattern,
  children,
}: TGridProps): React.ReactElement<TGridProps> => {
  const gridStyles = React.useMemo(() => {
    return {
      gridTemplateColumns: pattern,
      gridColumnGap: colGap,
      gridRowGap: rowGap,
    };
  }, [colGap, rowGap, pattern]);

  return (
    <div className="grid" style={gridStyles}>
      {children}
    </div>
  );
};

Grid.defaultProps = defaultProps;

export type { TGridProps };
export default Grid;
