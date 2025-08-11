import React, { FC } from "react";
import SearchInput from "./search-input";
import Categories from "./categories";

interface SearchFiltersProps {
  data: any;
}

const SearchFilters: FC<SearchFiltersProps> = ({ data }) => {
  console.log(data);
  return (
    <div className="px-4 lg:px-12 border-b py-9 flex flex-col gap-4 w-full">
      <SearchInput />
      <Categories data={data} />
    </div>
  );
};

export default SearchFilters;
