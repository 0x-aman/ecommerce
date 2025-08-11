import { Category } from "@/payload-types";
import React, { FC } from "react";
import CategoryDropdown from "./category-dropdown";

interface CategoriesProps {
  data: any;
  // Your prop types here
}

const Categories: FC<CategoriesProps> = ({ data }) => {
  return (
    <div className="relative w-full">
      <div className="flex flex-nowrap items-center">
        {data.map((category: Category) => (
          <div key={category.id}>
            <CategoryDropdown category={category} isActive={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
