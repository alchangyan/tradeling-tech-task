import * as React from 'react';
import './Select.scss';

interface TSelectProps {}

const defaultProps = {};

const Select: React.FC<TSelectProps> = (props) => {
  return <div className="select">Select</div>;
};

Select.defaultProps = defaultProps;

export type { TSelectProps };
export default Select;
