import * as React from 'react';

import './Grid.scss';

interface TPattern {
  sm?: string;
  lg?: string;
}

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
   * custom pattern for grid items
   */
  pattern?: TPattern;
  /**
   * grid children
   */
  children?: React.ReactNode | React.ReactNode[];
}

const defaultProps = {
  colGap: 0,
  rowGap: 0,
  pattern: {},
};

const Grid: React.FC<TGridProps> = ({
  colGap,
  rowGap,
  pattern,
  children,
}: TGridProps): React.ReactElement<TGridProps> => {
  const defaultPattern = 'auto';
  const [viewport, setViewport] = React.useState<'lg' | 'sm'>('lg');

  const gridStyles = React.useMemo(() => {
    const gridTemplateColumns = pattern
      ? pattern[viewport] || defaultPattern
      : defaultPattern;

    return {
      gridTemplateColumns,
      gridColumnGap: colGap,
      gridRowGap: rowGap,
    };
  }, [colGap, rowGap, pattern, viewport]);

  React.useEffect(() => {
    function handleViewport() {
      const newViewport = window.innerWidth <= 768 ? 'sm' : 'lg';

      if (viewport !== newViewport) {
        setViewport(newViewport);
      }
    }

    window.addEventListener('resize', handleViewport);

    return () => {
      window.removeEventListener('resize', handleViewport);
    };
  }, [viewport, setViewport]);

  return (
    <div className="grid" style={gridStyles}>
      {children}
    </div>
  );
};

Grid.defaultProps = defaultProps;

export type { TGridProps };
export default Grid;
