"use client";

import { createContext, useState, useEffect } from "react";
import { getRequest } from "../utils/api";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getRequest("/products/categories").then((categories) => {
      const formattedCategories = categories.map(
        (categoryOption) =>
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
