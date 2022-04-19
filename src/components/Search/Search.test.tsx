import { render } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <Search search="" handleSearchChange={jest.fn()} />
    );
    expect(container).toMatchSnapshot();
  });
});
