import { FC } from 'react';
import { Product } from '../../utils/utils';
import ProductListItem from './ProductListItem';

type Props = {
  products: Product[];
  handleProductClick: (name: string) => void;
};

export const ProductList: FC<Props> = ({ products, handleProductClick }) => {
  return (
    <div className="flex flex-col space-y-2">
      {products.map(({ productName, tags, category }) => {
        return (
          <ProductListItem
            key={productName}
            name={productName}
            tags={tags}
            category={category}
            handleProductClick={handleProductClick}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
