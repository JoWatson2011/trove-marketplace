import { getRequest } from "../utils/api";
import { useDisplaySize } from "../custom-hooks/useDisplaySize";
import ItemCard from "./ItemCard";
import { useEffect, useState, useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { useNavigate, useSearchParams } from "react-router-dom";

function AllItems() {
  const [items, setItems] = useState([]);
  const { categories } = useContext(CategoriesContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get("category"));
  const navigate = useNavigate();

  const displaySize = useDisplaySize();

  useEffect(() => {
    const itemsUrl = category
      ? `/products/category/${category.toLowerCase()}`
      : "/products";  
    getRequest(itemsUrl).then((items) => {
      setItems(items);
    });
  }, [category]);

  return (
    <main >
      <div className="flex justify-center">
        <label className="font-bold italic px-2" htmlFor="select-category">
          CATEGORY
        </label>
        <select
          className="border border-black rounded-full p-1 mx-2"
          id="select-category"
          onChange={(e) => {
            setCategory(e.target.value);
            navigate(`/items?category=${e.target.value}`);
          }}
        >
          <option value="">All items</option>
          {categories.map((categoryOption) => {
            if (categoryOption === category)
              return (
                <option value={categoryOption} selected>
                  {categoryOption}
                </option>
              );
            else
              return <option value={categoryOption}>{categoryOption}</option>;
          })}
        </select>
      </div>

      <div
        className={`${
          displaySize[0] < 800
            ? "grid grid-cols-1 justify-items-center"
            : "flex flex-wrap justify-evenly"
        }`}
      >
        {items.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </div>
    </main>
  );
}

export default AllItems;
