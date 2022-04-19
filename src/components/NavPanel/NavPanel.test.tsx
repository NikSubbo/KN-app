import { render } from '@testing-library/react';
import NavPanel from './NavPanel';

describe('NavPanel', () => {
  it('should match the snapshot', () => {
    const { container } = render(<NavPanel />);
    expect(container).toMatchSnapshot();
  });
});
