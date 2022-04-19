import { fireEvent, render } from '@testing-library/react';
import ScrollButton from './ScrollButton';

describe('ScrollButton', () => {
  it('should scroll', () => {
    const { getByRole } = render(<ScrollButton />);
    const button = getByRole('button');
    global.scrollTo = jest.fn();
    fireEvent.click(button);
    expect(global.scrollTo).toHaveBeenCalled();
  });
});
