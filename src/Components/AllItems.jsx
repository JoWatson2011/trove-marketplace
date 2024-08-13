import { getRequest } from "../utils/api";
import ItemCard from "./ItemCard";
import { useEffect } from "react";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function AllItems({ category, setCategory, categories, setCategories }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsUrl = category ? `/products/category/${category}` : "/products";
    getRequest(itemsUrl).then((items) => {
      setItems(items);
    });
    getRequest("/products/categories").then((categories) => {
      setCategories(categories);
    });
  }, [category]);

  function handleChange(event) {
    setCategory(event);
  }

  return (
    <div>
      <DropdownButton onSelect={handleChange} title="Select Category">
        <Dropdown.Item key="" eventKey="">
          All
        </Dropdown.Item>
        {categories.map((categoryOption) => {
          return (
            <Dropdown.Item
              key={categoryOption}
              eventKey={categoryOption}
            >
              {categoryOption.charAt(0).toUpperCase() + categoryOption.slice(1)}
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
