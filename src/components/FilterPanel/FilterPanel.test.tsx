import { render, screen } from '@testing-library/react';
import { Categories, initialCheckboxes } from '../../utils/utils';
import FilterPanel, { Props } from './FilterPanel';

const DEFAULT_PROPS = {
  handleCheckListChange: jest.fn(),
  checkboxes: initialCheckboxes
};

const renderContainer = (overrideProps?: Partial<Props>) => {
  return render(<FilterPanel {...DEFAULT_PROPS} {...overrideProps} />);
};

describe('FilterPanel', () => {
  it('should match the snapshot', () => {
    const { container } = renderContainer();
    expect(container).toMatchSnapshot();
  });

  it('should check checkbox', () => {
    renderContainer({
      checkboxes: {
        ...initialCheckboxes,
        [Categories.SoftwareDevelopment]: true
      }
    });
    const softwareDevelopmentCheckbox = screen.getByLabelText(
      Categories.SoftwareDevelopment
    );
    expect(softwareDevelopmentCheckbox).toBeChecked();
  });
});
