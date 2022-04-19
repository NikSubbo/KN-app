import { FC } from 'react';
import cx from 'classnames';

export type Props = {
  option: string | null;
  checked?: boolean;
  className?: string;
};

export const RadioButton: FC<Props> = ({ option, checked, className }) => {
  if (!option) return null;

  return (
    <div className={cx(className, 'inline-flex items-center cursor-pointer')}>
      <input
        type="radio"
        id={option}
        name="radioBtn"
        defaultChecked={checked}
        className="w-4 h-4 mr-2 peer cursor-pointer"
      />
      <label
        htmlFor={option}
        className="font-medium text-sm text-darkGray peer-checked:text-black cursor-pointer"
      >
        {option}
      </label>
    </div>
  );
};

export default RadioButton;
