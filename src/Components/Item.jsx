import { useParams } from "react-router-dom";
import { getRequest } from "../utils/api";
import { useEffect, useState } from "react";
import ActionButton from "./ActionButton";

function Item() {
  const { item_id } = useParams();
  const [itemViewed, setItemViewed] = useState({});

  useEffect(() => {
    getRequest(`/products/${item_id}`, { params: { item_id } }).then((item) => {
      setItemViewed(item);
    });
  }, [item_id]);

  return (
    <main className="flex sm:max-md:flex-col md:mt-[50px] mb-[70px]">
      <img
        src={itemViewed.image}
        className="max-w-[350px] md:ml-[150px] md:mr-[30px] place-self-center"
      />
      <div className="flex flex-col place-content-around md:mr-[50px] md:ml-[30px]">
        <h2 className="text-[30px] font-semibold italic wrap">
          {itemViewed.title}
        </h2>
        <p className="text-[30px] text-lime-700">£{itemViewed.price}</p>
        <div className="place-self-center">
          <ActionButton text={"ADD TO BASKET"} />
        </div>
        <p className="border border-black rounded-lg p-4">{itemViewed.description}</p>
      </div>
    </main>
  );
}

export default Item;
