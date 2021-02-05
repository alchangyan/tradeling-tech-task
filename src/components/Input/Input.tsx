import * as React from 'react';
import './Input.scss';

interface TInputProps {}

const defaultProps = {};

const Input: React.FC<TInputProps> = (props) => {
  return <div className="input">Input</div>;
};

Input.defaultProps = defaultProps;

export type { TInputProps };
export default Input;
