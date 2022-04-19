import { render } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });
});
