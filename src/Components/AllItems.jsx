import { getRequest } from "../utils/api";
import ItemCard from "./ItemCard";
import { useEffect } from "react";
import { useState } from "react";

function AllItems({ category, setCategory, categories, setCategories }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getRequest("/products/categories").then((categories) => {
      const formattedCategories = categories.map(
        (categoryOption) =>
          categoryOption.charAt(0).toUpperCase() + categoryOption.slice(1)
      );
      setCategories(formattedCategories);
    });
  }, []);
  useEffect(() => {
    const itemsUrl = category
      ? `/products/category/${category.toLowerCase()}`
      : "/products";
    getRequest(itemsUrl).then((items) => {
      setItems(items);
    });
  }, [category]);



  return (
    <>
      <div className="flex justify-center">
        <label className="font-bold italic px-2" htmlFor="select-category">
          CATEGORY
        </label>
        <select
          className="border border-black rounded-full p-1 mx-2"
          id="select-category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="">All items</option>
          {categories.map((category) => {
            return <option value={category}>{category}</option>;
          })}
        </select>
      </div>

      <div className="md:flex md:flex-wrap md:justify-evenly">
        {items.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </div>
    </>
  );
}

export default AllItems;
