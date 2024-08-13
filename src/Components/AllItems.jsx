import { getRequest } from "../utils/api";
import ItemCard from "./ItemCard";
import { useEffect } from "react";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

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
  }, [])
  useEffect(() => {
    const itemsUrl = category ? `/products/category/${category}` : "/products";
    getRequest(itemsUrl).then((items) => {
      setItems(items);
    });
  }, [category]);

  function handleChange(event) {
    setCategory(event);
  }

  return (
    <div>
      <DropdownButton onSelect={handleChange} title={category || "Select Category"}>
        <Dropdown.Item key="" eventKey="">
          All Items
        </Dropdown.Item>
        {categories.map((categoryOption) => {
          return (
            <Dropdown.Item
              key={categoryOption}
              eventKey={categoryOption}
            >
              {categoryOption}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>

      <div className="flex flex-wrap justify-around">
        {items.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default AllItems;
