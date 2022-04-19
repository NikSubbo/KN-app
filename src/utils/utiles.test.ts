import { filterProducts, initialCheckboxes, Categories } from './utils';

const mockedProducts = [
  {
    productName: 'TechSmith Snagit',
    tags: ['Screen capture', 'Snipping tool', 'Snagit', 'TechSmith'],
    category: 'Graphic Editors',
    manufacturerUrl: 'https://www.techsmith.com/screen-capture.html',
    description: [
      'Capture any process on your computer screen and quickly create visual instructions.',
      '- Show customers and coworkers how to do something with screenshots and screen recordings.',
      '- Mark up your screenshots, or talk through a process and answer questions with a quick video.',
      '- Create custom how-to guides, tutorials, and quick videos right within Snagit'
    ],
    option1: 'With Maintenance',
    option2: 'Without Maintenance'
  },
  {
    productName: 'Another Text Editor',
    tags: [],
    category: 'Text Editors',
    manufacturerUrl: 'https://www.techsmith.com/screen-capture.html',
    description: [
      'Capture any process on your computer screen and quickly create visual instructions.',
      '- Show customers and coworkers how to do something with screenshots and screen recordings.',
      '- Mark up your screenshots, or talk through a process and answer questions with a quick video.',
      '- Create custom how-to guides, tutorials, and quick videos right within Snagit'
    ],
    option1: 'With Maintenance',
    option2: 'Without Maintenance'
  },
  {
    productName: 'Foxit Software',
    tags: [],
    category: 'Text Editors',
    manufacturerUrl: 'https://www.foxitsoftware.com/de/pdf-editor',
    description: [
      'PhantomPDF provides powerful PDF Editor capabilities to allow authors to update their documents themselves.',
      'Business - Advances capabilities, complete lifecycle solution.'
    ],
    option1: '1 Year Maintenance',
    option2: 'Without Maintenance'
  }
];

describe('filterProducts', () => {
  it('should return all products', () => {
    expect(filterProducts(mockedProducts, '', initialCheckboxes)).toEqual(
      mockedProducts
    );
  });

  it('should return TechSmith Snagit if we search for "tech"', () => {
    expect(filterProducts(mockedProducts, 'tech', initialCheckboxes)).toEqual([
      mockedProducts[0]
    ]);
  });

  it('should return Foxit Software if we check "Text Editors"', () => {
    expect(
      filterProducts(mockedProducts, '', {
        ...initialCheckboxes,
        [Categories.TextEditors]: true
      })
    ).toEqual([mockedProducts[1], mockedProducts[2]]);
  });

  it('should return Another Text Editor if we search for "another" and check "Text Editors"', () => {
    expect(
      filterProducts(mockedProducts, 'another', {
        ...initialCheckboxes,
        [Categories.TextEditors]: true
      })
    ).toEqual([mockedProducts[1]]);
  });
});
