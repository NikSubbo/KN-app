import { FC, useState } from 'react';
import NavPanel from './components/NavPanel/NavPanel';
import FilterPanel from './components/FilterPanel/FilterPanel';
import Search from './components/Search/Search';
import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';
import productsFromApi from './api/products.json';
import { filterProducts, initialCheckboxes, Product } from './utils/utils';
import ScrollButton from './components/ScrollButton/ScrollButton';
import Spinner from './components/Spinner/Spinner';

const App: FC = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [search, setSearch] = useState('');
  const [checkboxes, setCheckboxes] =
    useState<Record<string, boolean>>(initialCheckboxes);
  const [productName, setProductName] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleCheckListChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxes({ ...checkboxes, [e.target.value]: e.target.checked });
  };

  const handleProductClick = (name: string) => {
    setProductName(name);
  };

  const handleProductDetailsClose = () => {
    setProductName('');
  };

  // api response delay imitation
  setTimeout(() => {
    setProducts(productsFromApi);
  }, 1000);

  if (!products) {
    return <Spinner />;
  }

  const filteredProducts = filterProducts(products, search, checkboxes);
  const product = products.find((el) => el.productName === productName);

  return (
    <div className="px-6 pt-16 pb-10" data-testid="app">
      <h1 className="text-lg text-black"> Create Demand</h1>
      <p className="text-sm text-darkGray">
        Search the product you need here. Use tags to find any alternative.
      </p>
      <NavPanel />
      <div className="flex space-x-4">
        <div className="w-full">
          <div className="pt-3 pb-8 mb-4 bg-white rounded shadow-sm divide-y divide-gray">
            <h2 className="px-6 pb-5 text-base text-black font-medium">
              I’m looking for...
            </h2>
            <div className="px-6">
              <FilterPanel
                handleCheckListChange={handleCheckListChange}
                checkboxes={checkboxes}
              />
              <Search search={search} handleSearchChange={handleSearchChange} />
            </div>
          </div>
          <ProductList
            products={filteredProducts}
            handleProductClick={handleProductClick}
          />
        </div>
        {product && (
          <ProductDetails
            product={product}
            handleProductDetailsClose={handleProductDetailsClose}
          />
        )}
      </div>
      <ScrollButton />
    </div>
  );
};

export default App;
