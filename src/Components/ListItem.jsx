import { useState } from "react";
import { postRequest } from "../utils/api";

function ListItem() {
  const [newItem, setNewItem] = useState({});
  return (
    <form>
      <label>
        Item Name
        <input name="item-name" type="text" placeholder="e.g. shoes" />
      </label>
      <label>
        Description
        <input name="item-description" type ="text" placeholder="e.g. size 8 shoes" />
      </label>
      <label>
        Image
        <input name="item-image" type="text" placeholder="www.sample.com/image.jpeg" />
      </label>
      <label>
        Price
        <input name="item-price" type ="number"/>
      </label>
    </form>
  );
}

export default ListItem;
