import * as React from 'react';
import classnames from 'classnames';

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
  /**
   * error message
   */
  errorMessage?: string | null;
}

const defaultProps: TInputProps = {
  defaultValue: '',
  placeholder: '',
  tabIndex: 0,
  onChange: () => {},
  errorMessage: null,
};

const Input: React.FC<TInputProps> = ({
  defaultValue,
  placeholder,
  tabIndex,
  onChange,
  width,
  errorMessage,
}: TInputProps): React.ReactElement<TInputProps> => {
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      if (onChange) onChange(value);
    },
    [onChange],
  );

  return (
    <div className="input-wrapper" style={{ width }}>
      <input
        className="input"
        defaultValue={defaultValue}
        placeholder={placeholder}
        tabIndex={tabIndex}
        onChange={handleChange}
      />
      <div
        className={classnames({
          'input__error-message': true,
          'input__error-message_active': !!errorMessage,
        })}
      >
        {errorMessage}
      </div>
    </div>
  );
};

Input.defaultProps = defaultProps;

export type { TInputProps };
export default Input;
