import { FC } from 'react';
import TagList from '../TagList/TagList';

type Props = {
  name: string;
  category: string;
  tags: string[];
  handleProductClick: (name: string) => void;
};

export const ProductListItem: FC<Props> = ({
  name,
  category,
  tags,
  handleProductClick
}) => {
  const onClick = () => {
    handleProductClick(name);
  };

  return (
    <button
      className="flex justify-between bg-white rounded shadow-sm py-3.5 px-6"
      onClick={onClick}
    >
      <div>
        <h3 className="text-sm font-medium text-black text-left">{name}</h3>
        <TagList className="mt-1" tags={tags} />
      </div>
      <p className="flex self-center text-darkGray text-sm whitespace-nowrap ml-4">
        {category}
      </p>
    </button>
  );
};

export default ProductListItem;
