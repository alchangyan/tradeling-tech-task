import * as React from 'react';
import './Input.scss';

interface TInputProps {
  /**
   * input default value
   */
  defaultValue?: string;
  /**
   * input fixed width(px)
   */
  width?: number;
  /**
   * input placeholder
   */
  placeholder?: string;
  /**
   * input tab index
   */
  tabIndex?: number;
  /**
   * onchange event callback
   */
  onChange?: (v: string) => void;
}

const defaultProps: TInputProps = {
  defaultValue: '',
  placeholder: '',
  tabIndex: 0,
  onChange: () => {},
};

const Input = ({
  defaultValue,
  placeholder,
  tabIndex,
  onChange,
  width,
}: TInputProps): React.ReactElement<TInputProps> => {
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      if (onChange) onChange(value);
    },
    [onChange],
  );

  return (
    <input
      className="input"
      defaultValue={defaultValue}
      placeholder={placeholder}
      tabIndex={tabIndex}
      onChange={handleChange}
      style={{ width }}
    />
  );
};

Input.defaultProps = defaultProps;

export type { TInputProps };
export default Input;
