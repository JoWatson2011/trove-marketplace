"use client";
import { getRequest } from "../utils/api";
import ItemCard from "./ItemCard";
import CategorySelector from "./CategorySelector";
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
      <CategorySelector category={category} setCategory={setCategory} />
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-10">
        {items.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </div>
    </main>
  );
}

export default AllItems;
