import { getRequest } from "../utils/api";
import ItemCard from "./ItemCard";
import { useEffect } from "react";
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'

function AllItems() {
  const [items, setItems] = useState([]);
const [category, setCategory] = useState("")
const [categories, setCategories] = useState([])

  useEffect(() => {
    const itemsUrl = category ? `/api/items?category_name=${category}` : "/api/items"
    getRequest(itemsUrl).then(({ items }) => {
      setItems(items);
    });
    getRequest("/api/categories").then(({categories}) => {
      setCategories(categories)
    })
  }, [category]);

function handleChange(event){
  setCategory(event)
}

  return (
    <div>
      <DropdownButton onSelect={handleChange} title="Select Category">
        <Dropdown.Item key="" eventKey="">All</Dropdown.Item>
      {categories.map((categoryOption) => {
            return (
              <Dropdown.Item key={categoryOption.category_name} eventKey={categoryOption.category_name} >{categoryOption.category_name}</Dropdown.Item>
            )
          })}
      </DropdownButton>

      {/* <form className="select-item-category">
        <label htmlFor="pick-category">Select Category:</label>
        
        <input 
      
        id="pick-category"
        name="pick-category"
        value={category}
        list="category-data-list"
        />
        <datalist id="category-data-list">
          {categories.map((categoryOption) => {
            return (
              <option value={categoryOption.category_name}></option>
            )
          })}
        </datalist>
      </form> */}
      <div className="item-cards">
        {items.map((item) => {
          return <ItemCard item={item} key={item.item_id} />;
        })}
      </div>
    </div>
  );
}

export default AllItems;
