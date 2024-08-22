import { useState, useContext } from "react";
import { postRequest } from "../utils/api";
import { CategoriesContext } from "../context/CategoriesContext";
import ActionButton from "./ActionButton";

function ListItem() {
  const [newItem, setNewItem] = useState({});
  const [isListed, setIsListed] = useState(false);
  const [error, setError] = useState("");
  const { categories } = useContext(CategoriesContext);

  function handleListSubmit(e) {
    e.preventDefault();
    const categoryNames = categories.map((category) => category);

    // if (!categoryNames.includes(newItem.category)) {
    //   postRequest("/api/categories", { category_name: newItem.category });
    // }

    postRequest("/products", newItem)
      .then(() => {
        setIsListed(true);
      })
      .catch((err) => setError(err));

    // post request to /items endpoint
    // 'item listed'
  }

  return (
    <main className="flex flex-col place-items-center ">
      <div className="border-b-4 border-r-4 border-t border-l border-lime-700 rounded-lg px-10 my-3">
        <div className="p-3 italic text-center">
          <p>list your item for sale by filling in the form below ✌️</p>
          <p>
            your product is likely to sell faster if you provide more details.
          </p>
        </div>
        <form
          onSubmit={handleListSubmit}
          className="flex flex-col  gap-y-[10px] mt-5"
        >
          <label htmlFor="item-name">Item Name</label>
          <input
            onChange={(e) => {
              setNewItem({ ...newItem, title: e.target.value });
            }}
            id="item-name"
            name="item-name"
            type="text"
            placeholder="e.g. shoes"
            className=" mx-3 border rounded-full p-2 "
          />
          <label htmlFor="item-description">Description</label>
          <input
            onChange={(e) => {
              setNewItem({ ...newItem, description: e.target.value });
            }}
            id="item-description"
            name="item-description"
            type="text"
            placeholder="e.g. size 8 shoes"
            className=" mx-3 border rounded-full p-2"
          />
          <label htmlFor="item-image">Image</label>
          <input
            onChange={(e) => {
              setNewItem({ ...newItem, image: e.target.value });
            }}
            id="item-image"
            name="item-image"
            type="text"
            placeholder="www.sample.com/image.jpeg"
            className=" mx-3 border rounded-full p-2 justify-self-end"
          />
          <label htmlFor="item-price">Price</label>
          <input
            onChange={(e) => {
              setNewItem({ ...newItem, price: +e.target.value });
            }}
            id="item-price"
            name="item-price"
            type="number"
            placeholder="5.50"
            step="0.01"
            min="0"
            className=" mx-3 border rounded-full p-2"
          />
          <label htmlFor="pick-category">Category</label>
          <input
            onChange={(e) => {
              setNewItem({ ...newItem, category: e.target.value });
            }}
            id="pick-category"
            name="pick-category"
            list="category-data-list"
            placeholder="Select a category"
            className=" mx-3 border rounded-full p-2"
          />
          <datalist id="category-data-list">
            {categories.map((categoryOption) => {
              return (
                <option value={categoryOption} key={categoryOption}></option>
              );
            })}
          </datalist>
          <div className="place-self-center" data-cy="form-button">
            <ActionButton text={"List Item"} />
          </div>
        </form>
        {isListed ? (
          <p className=" text-red-900" data-cy="success-message">
            Item listed!
          </p>
        ) : null}
        {error ? (
          <p className="text-red-900" data-cy="error-message">
            {error.message}
          </p>
        ) : null}
      </div>
    </main>
  );
}

export default ListItem;
