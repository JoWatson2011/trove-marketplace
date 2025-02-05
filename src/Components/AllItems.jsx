"use client";
import { getRequest } from "../utils/api";
import ItemCard from "./ItemCard";
import { useEffect, useState, useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { useRouter, useSearchParams } from "next/navigation";

function AllItems() {
  const [items, setItems] = useState([]);
  const { categories } = useContext(CategoriesContext);
  const [category, setCategory] = useState(useSearchParams().get("category"));
  const router = useRouter();

  useEffect(() => {
    const itemsUrl = category
      ? `/products/category/${category.toLowerCase()}`
      : "/products";
    getRequest(itemsUrl).then((items) => {
      setItems(items);
    });
  }, [category]);

  return (
    <main>
      <div className="flex justify-center">
        <label className="font-bold italic px-2" htmlFor="select-category">
          CATEGORY
        </label>
        <select
          className="border border-black rounded-full p-1 mx-2"
          id="select-category"
          onChange={(e) => {
            setCategory(e.target.value);
            router.push(`/items?category=${e.target.value}`);
          }}
        >
          <option value="">All items</option>
          {categories.map((categoryOption) => {
            if (categoryOption === category)
              return (
                <option
                  value={categoryOption}
                  defaultValue={categoryOption}
                  key={categoryOption}
                >
                  {categoryOption}
                </option>
              );
            else
              return (
                <option value={categoryOption} key={categoryOption}>
                  {categoryOption}
                </option>
              );
          })}
        </select>
      </div>

      <div
        className=
        "grid grid-cols-1 justify-items-center md:grid-cols-2 gap-10"
      >
        {items.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </div>
    </main>
  );
}

export default AllItems;
