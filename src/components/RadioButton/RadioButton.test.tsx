import { render } from '@testing-library/react';
import RadioButton, { Props } from './RadioButton';

const DEFAULT_PROPS = {
  option: 'option'
};

const renderContainer = (overrideProps?: Partial<Props>) => {
  return render(<RadioButton {...DEFAULT_PROPS} {...overrideProps} />);
};

describe('RadioButton', () => {
  it('should match the snapshot', () => {
    const { container } = renderContainer();
    expect(container).toMatchSnapshot();
  });

  it('should return null for null option', () => {
    const { container } = renderContainer({
      option: null
    });
    expect(container.firstChild).toBeNull();
  });

  it('should be checked', () => {
    const { getByRole } = renderContainer({
      checked: true
    });
    expect(getByRole('radio')).toBeChecked();
  });
});
