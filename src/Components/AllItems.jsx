import { getRequest } from "../utils/api";
import ItemCard from "./ItemCard";
import { useEffect, useState, useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";

function AllItems() {
  const [items, setItems] = useState([]);
  const { categories } = useContext(CategoriesContext);
  const [category, setCategory] = useState("");

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
