import { getRequest } from "../utils/api";
import ItemCard from "./ItemCard";
import { useEffect } from "react";
import { useState } from "react";

function AllItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getRequest("/api/items").then(({ items }) => {
      setItems(items);
    });
  }, []);

  return (
    <div className="item-cards">
      {items.map((item) => {
        return <ItemCard item={item} key={item.item_id} />;
      })}
    </div>
  );
}

export default AllItems;
