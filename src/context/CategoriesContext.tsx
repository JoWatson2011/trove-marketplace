"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import { getRequest } from "../utils/api";

type CategoryContextType = {
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
};
export const CategoriesContext = createContext<CategoryContextType | null>(
  null
);

export const CategoriesProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState([""]);
  useEffect(() => {
    getRequest("/products/categories").then((categories) => {
      const formattedCategories = categories.map(
        (categoryOption: string) =>
          categoryOption.charAt(0).toUpperCase() + categoryOption.slice(1)
      );
      setCategories(formattedCategories);
    });
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
