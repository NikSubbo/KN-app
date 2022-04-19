import { FC } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

type Props = {
  search: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search: FC<Props> = ({ search, handleSearchChange }) => {
  return (
    <div className="flex bg-smoke border-1 border-lightGray rounded-sm p-1.5">
      <SearchIcon />
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Type here..."
        className="bg-smoke ml-1 pl-2 focus:outline-none w-full"
      />
    </div>
  );
};

export default Search;
