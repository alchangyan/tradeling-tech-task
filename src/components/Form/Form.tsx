import * as React from 'react';
import './Form.scss';

interface TFormProps {}

const defaultProps = {};

const Form: React.FC<TFormProps> = (props) => {
  return <div className="form">Form</div>;
};

Form.defaultProps = defaultProps;

export type { TFormProps };
export default Form;
