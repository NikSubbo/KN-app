import { FC } from 'react';
import FilterPanelCheckbox from './FilterPanelCheckbox';

export type Props = {
  handleCheckListChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkboxes: Record<string, boolean>;
};

export const FilterPanel: FC<Props> = ({
  handleCheckListChange,
  checkboxes
}) => {
  return (
    <div className="flex mt-8 mb-5 justify-between flex-wrap">
      {Object.entries(checkboxes).map(([label, isChecked]) => {
        return (
          <FilterPanelCheckbox
            key={label}
            label={label}
            isChecked={isChecked}
            handleCheckListChange={handleCheckListChange}
          />
        );
      })}
    </div>
  );
};

export default FilterPanel;
