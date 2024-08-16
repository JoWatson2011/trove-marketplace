import { useState, useContext } from "react";
import { postRequest } from "../utils/api";
import { CategoriesContext } from "../context/CategoriesContext";

function ListItem() {
  const [newItem, setNewItem] = useState({});
  const [isListed, setIsListed] = useState(false);
  const { categories } = useContext(CategoriesContext);

  function handleListSubmit(e) {
    e.preventDefault();
    const categoryNames = categories.map((category) => category);

    if (!categoryNames.includes(newItem.category)) {
      postRequest("/api/categories", { category_name: newItem.category });
    }

    postRequest("/api/items", newItem)
      .then(() => {
        setIsListed(true);
      })
      .catch((err) => console.log(err));

    // post request to /items endpoint
    // 'item listed'
  }

  return (
    <div>
      <form onSubmit={handleListSubmit} className="grid gap-y-[10px]">
        <label>
          Item Name
          <input
            onChange={(e) => {
              setNewItem({ ...newItem, item_name: e.target.value });
            }}
            id="item-name"
            name="item-name"
            type="text"
            placeholder="e.g. shoes"
          />
        </label>
        <label>
          Description
          <input
            onChange={(e) => {
              setNewItem({ ...newItem, description: e.target.value });
            }}
            id="item-description"
            name="item-description"
            type="text"
            placeholder="e.g. size 8 shoes"
          />
        </label>
        <label>
          Image
          <input
            onChange={(e) => {
              setNewItem({ ...newItem, img_url: e.target.value });
            }}
            id="item-image"
            name="item-image"
            type="text"
            placeholder="www.sample.com/image.jpeg"
          />
        </label>
        <label>
          Price £
          <input
            onChange={(e) => {
              setNewItem({ ...newItem, price: +e.target.value * 100 });
            }}
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
              setNewItem({ ...newItem, category_name: e.target.value });
            }}
            id="pick-category"
            name="pick-category"
            list="category-data-list"
          />
          <datalist id="category-data-list">
            {categories.map((categoryOption) => {
              return (
                <option
                  value={categoryOption}
                  key={categoryOption}
                ></option>
              );
            })}
          </datalist>
        </label>
        <button type="submit">List</button>
      </form>
      {isListed ? <p className=" text-red-900">Item listed!</p> : null}
    </div>
  );
}

export default ListItem;
