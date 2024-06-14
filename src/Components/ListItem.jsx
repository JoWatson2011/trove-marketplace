import { useEffect, useState } from "react";
import { getRequest, postRequest } from "../utils/api";

function ListItem({ categories, setCategories }) {
  const [newItem, setNewItem] = useState({});
  useEffect(() => {
    getRequest("/api/categories").then(({ categories }) => {
      setCategories(categories);
    });
  }, []);

  function handleListSubmit(e) {
    e.preventDefault();
    console.log(newItem);
    // check if category exists
    if(!categories.includes(newItem.category)){
        postRequest("/api/categories", {category_name: newItem.category})
    }

    // if doesn't, do post request
    // post request to /items endpoint
    // 'item listed'
  }

  return (
    <form onSubmit={handleListSubmit} className="list-item-form">
      <label>
        Item Name
        <input
          id="item-name"
          name="item-name"
          type="text"
          placeholder="e.g. shoes"
        />
      </label>
      <label>
        Description
        <input
          id="item-description"
          name="item-description"
          type="text"
          placeholder="e.g. size 8 shoes"
        />
      </label>
      <label>
        Image
        <input
          id="item-image"
          name="item-image"
          type="text"
          placeholder="www.sample.com/image.jpeg"
        />
      </label>
      <label>
        Price £
        <input
          id="item-price"
          name="item-price"
          type="number"
          placeholder="5.50"
          min="0"
        />
      </label>
      <label>
        Category
        <input
        onChange={(e) => {
            setNewItem({...newItem, category:e.target.value})
        }}
          id="pick-category"
          name="pick-category"
          list="category-data-list"
        />
        <datalist id="category-data-list">
          {categories.map((categoryOption) => {
            return <option value={categoryOption.category_name}></option>;
          })}
        </datalist>
      </label>
      <button type="submit">List</button>
    </form>
  );
}

export default ListItem;
