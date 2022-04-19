import { render } from '@testing-library/react';
import Taglist, { Props } from './TagList';

const DEFAULT_PROPS = {
  tags: ['PDF', 'Change', 'Create', 'Maintenance', 'Business', 'FoxIT']
};

const renderContainer = (overrideProps?: Partial<Props>) => {
  return render(<Taglist {...DEFAULT_PROPS} {...overrideProps} />);
};

describe('TagList', () => {
  it('should match the snapshot', () => {
    const { container } = renderContainer();
    expect(container).toMatchSnapshot();
  });

  it('should return null for the empty tags array', () => {
    const { container } = renderContainer({
      tags: []
    });
    expect(container.firstChild).toBeNull();
  });
});
