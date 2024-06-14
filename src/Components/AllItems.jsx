import { getRequest } from "../utils/api";
import ItemCard from "./ItemCard";
import { useEffect } from "react";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function AllItems({category, setCategory, categories, setCategories}) {
  const [items, setItems] = useState([]);


  useEffect(() => {
    console.log("useEffect triggered!");

    const itemsUrl = category
      ? `/api/items?category_name=${category}`
      : "/api/items";
    getRequest(itemsUrl).then(({ items }) => {
      setItems(items);
    });
    getRequest("/api/categories").then(({ categories }) => {
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
              key={categoryOption.category_name}
              eventKey={categoryOption.category_name}
            >
              {categoryOption.category_name}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>

      <div className="item-cards">
        {items.map((item) => {
          return <ItemCard item={item} key={item.item_id} />;
        })}
      </div>
    </div>
  );
}

export default AllItems;
