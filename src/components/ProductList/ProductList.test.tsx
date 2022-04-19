import { render } from '@testing-library/react';
import ProductList from './ProductList';

const DEFAULT_PROPS = {
  products: [
    {
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
    {
      productName: 'Foxit Software PhantomPDF Business',
      tags: [],
      category: 'Text Editors',
      manufacturerUrl: 'https://www.foxitsoftware.com/de/pdf-editor',
      description: [
        'PhantomPDF provides powerful PDF Editor capabilities to allow authors to update their documents themselves.',
        'Business - Advances capabilities, complete lifecycle solution.'
      ],
      option1: null,
      option2: null
    }
  ],
  handleProductClick: jest.fn()
};

describe('ProductList', () => {
  it('should match the snapshot', () => {
    const { container } = render(<ProductList {...DEFAULT_PROPS} />);
    expect(container).toMatchSnapshot();
  });
});
