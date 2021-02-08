import * as React from 'react';
import './Select.scss';

type TSelectProps = {
  /**
   * select options array
   */
  options?: string[];
  /**
   * select fixed width(px)
   */
  width?: number;
  /**
   * selected option id
   */
  defaultValue?: string;
  /**
   * input placeholder
   */
  placeholder?: string;
  /**
   * select tab index
   */
  tabIndex?: number;
  /**
   * onchange event callback
   */
  onChange?: (v: string) => void;
};

const defaultProps: TSelectProps = {
  options: [],
  defaultValue: '',
  tabIndex: 0,
  onChange: () => {},
};

const Select: React.FC<TSelectProps> = ({
  options,
  defaultValue,
  tabIndex,
  placeholder,
  onChange,
  width,
}: TSelectProps): React.ReactElement<TSelectProps> => {
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.currentTarget;
      if (onChange) onChange(value);
    },
    [onChange],
  );

  return (
    <div className="select" style={{ width }}>
      <select
        tabIndex={tabIndex}
        onChange={handleChange}
        defaultValue={defaultValue}
      >
        {placeholder && (
          <option disabled selected value="">
            {placeholder}
          </option>
        )}
        {options &&
          options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

Select.defaultProps = defaultProps;

export type { TSelectProps };
export default Select;
