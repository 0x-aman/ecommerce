import React, { FC } from "react";
import SearchInput from "./search-input";
import Categories from "./categories";
import { CustomCategory } from "../types";

interface SearchFiltersProps {
  data: CustomCategory[];
}

const SearchFilters: FC<SearchFiltersProps> = ({ data }) => {
  console.log(data);
  return (
    <div className="px-4 lg:px-12 border-b py-9 flex flex-col gap-4 w-full">
      <SearchInput data={data} />
      <div className="hidden lg:block">
        <Categories data={data} />
      </div>
    </div>
  );
};

export default SearchFilters;
