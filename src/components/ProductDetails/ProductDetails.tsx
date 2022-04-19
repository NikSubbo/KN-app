import { FC } from 'react';
import { openNewUrl } from '../../utils/utils';
import type { Product } from '../../utils/utils';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import RadioButton from '../RadioButton/RadioButton';
import TagList from '../TagList/TagList';

export type Props = {
  product: Product;
  handleProductDetailsClose: () => void;
};

export const ProductDetails: FC<Props> = ({
  product,
  handleProductDetailsClose
}) => {
  const { productName, tags, manufacturerUrl, description, option1, option2 } =
    product;
  const onClick = () => {
    openNewUrl(manufacturerUrl);
  };

  return (
    <div className="pt-3 pb-6 bg-white rounded shadow-sm min-w-[320px] max-w-xs h-min">
      <div className="divide-y divide-gray">
        <div className="flex justify-between items-center px-6 pb-5">
          <h2 className="text-base text-black font-medium">Product Details</h2>
          <button onClick={handleProductDetailsClose}>
            <CloseIcon />
          </button>
        </div>
        <h3 className="pt-10 px-6 text-sm text-black font-medium">
          {productName}
        </h3>
      </div>
      <div className="px-6">
        <TagList className="mt-5" tags={tags} />
        <button
          onClick={onClick}
          className="text-sm font-medium text-white mt-6 px-4 py-2 bg-aqua rounded-sm shadow-sm"
        >
          Go to Manufacturer
        </button>
        <p className="mt-3 mb-8 text-sm text-black">{description}</p>
        <div className="flex flex-col">
          <RadioButton option={option1} checked className="mb-4" />
          <RadioButton option={option2} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
