import { useParams } from "react-router-dom";
import { getRequest } from "../utils/api";
import { useEffect, useState } from "react";
function Item() {
  const { item_id } = useParams();
  const [itemViewed, setItemViewed] = useState({});

  useEffect(() => {
    getRequest(`/api/items/${item_id}`, { params: { item_id } }).then(
      ({ item }) => {
        setItemViewed(item);
      }
    );
  }, [item_id]);
  console.log(itemViewed);

  return <div className="itemPage">
    <h2>{itemViewed.item_name}</h2>
    <p>£{itemViewed.price/100}</p>
    <img src={itemViewed.img_url}/>
    <p>{itemViewed.description}</p>
    <p></p>
  </div>;
}

export default Item;
