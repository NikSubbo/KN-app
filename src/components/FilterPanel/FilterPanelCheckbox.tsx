import { FC } from 'react';

type Props = {
  label: string;
  isChecked: boolean;
  handleCheckListChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FilterPanelCheckbox: FC<Props> = ({
  label,
  isChecked,
  handleCheckListChange
}) => {
  return (
    <div className="mr-6">
      <label
        htmlFor={label}
        className="inline-flex items-center text-darkGray font-medium text-sm cursor-pointer"
      >
        <input
          type="checkbox"
          id={label}
          name={label}
          value={label}
          className="w-4 h-4 mr-2.5 accent-aqua cursor-pointer"
          checked={isChecked}
          onChange={handleCheckListChange}
        />
        {label}
      </label>
    </div>
  );
};

export default FilterPanelCheckbox;
