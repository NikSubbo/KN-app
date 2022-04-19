export interface Product {
  productName: string;
  tags: string[];
  category: string;
  manufacturerUrl: string;
  description: string[];
  option1: string | null;
  option2: string | null;
}

export enum Categories {
  SoftwareDevelopment = 'Software Development',
  DailyBussiness = 'Daily Business',
  GraphicEditors = 'Graphic Editors',
  TextEditors = 'Text Editors',
  ManagementTools = 'Management Tools'
}

export const initialCheckboxes = {
  [Categories.SoftwareDevelopment]: false,
  [Categories.DailyBussiness]: false,
  [Categories.GraphicEditors]: false,
  [Categories.TextEditors]: false,
  [Categories.ManagementTools]: false
};

export const openNewUrl = (url: string) => {
  if (window) {
    window.open(url, '_blank');
  }
};

export const filterProducts = (
  products: Product[],
  search: string,
  checkboxes: Record<string, boolean>
) => {
  let updatedProducts = products;
  if (search) {
    updatedProducts = updatedProducts.filter((el: Product) =>
      el.productName.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (!Object.values(checkboxes).every((el) => el === false)) {
    updatedProducts = updatedProducts.filter(
      (el: Product) => checkboxes[el.category]
    );
  }

  return updatedProducts;
};
