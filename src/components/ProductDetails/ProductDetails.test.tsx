import { fireEvent, render } from '@testing-library/react';
import ProductDetails from './ProductDetails';

const DEFAULT_PROPS = {
  product: {
    productName: 'Foxit software PhantomPDF Standard',
    tags: ['PDF', 'Change', 'Create', 'Maintenance', 'Business', 'FoxIT'],
    category: 'Text Editors',
    manufacturerUrl: 'https://www.foxitsoftware.com/de/pdf-editor',
    description: [
      'PhantomPDF provides powerful PDF Editor capabilities to allow authors to update their documents themselves.',
      'Standard - Simple interface and limited functionality.'
    ],
    option1: '1 Year Maintenance',
    option2: 'Without Maintenance'
  },
  handleProductDetailsClose: jest.fn()
};

describe('ProductDetails', () => {
  it('should open tab', () => {
    const { getByRole } = render(<ProductDetails {...DEFAULT_PROPS} />);
    const button = getByRole('button', { name: 'Go to Manufacturer' });
    global.open = jest.fn();
    fireEvent.click(button);
    expect(global.open).toHaveBeenCalled();
  });
});
