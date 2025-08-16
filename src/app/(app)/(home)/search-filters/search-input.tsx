"use client";
import { Input } from "@/components/ui/input";
import { ListFilterIcon, SearchIcon } from "lucide-react";
import React, { FC, useState } from "react";
import { CustomCategory } from "../types";
import CategoriesSidebar from "./categories-sidebar";
import { Button } from "@/components/ui/button";

interface SearchInputProps {
  disabled?: boolean;
  data: CustomCategory[];
}

const SearchInput: FC<SearchInputProps> = ({ disabled, data }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex items-center gap-2 w-full">
      <CategoriesSidebar
        data={data}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
        <Input className="pl-8" placeholder="Search products" />
      </div>

      <Button
        variant={"elevated"}
        onClick={() => setIsSidebarOpen(true)}
        className="size-12 shrink-0 flex lg:hidden"
      >
        <ListFilterIcon />
      </Button>
    </div>
  );
};

export default SearchInput;
