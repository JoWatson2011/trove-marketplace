"use client";
import { useParams } from "next/navigation";
import { getRequest } from "../utils/api";
import { useEffect, useState } from "react";
import ActionButton from "./ActionButton";
import { useDisplaySize } from "../custom-hooks/useDisplaySize";

function Item() {
  const { slug: item_id } = useParams();
  const [itemViewed, setItemViewed] = useState<{
    id: string;
    image: string;
    title: string;
    price: number;
    description: string;
  } | null>(null);
  const displaySize = useDisplaySize
  useEffect(() => {
    getRequest(`/products/${item_id}`, { params: { item_id } }).then((item) => {
      setItemViewed(item);
    });
    
  }, [item_id]);

  if (displaySize === null || itemViewed === null) {
    return <div>Loading...</div>;
  }

  return (
    <main
      className={`flex  ${
        displaySize[0] < 800
          ? `flex-col max-w-${displaySize[0] - 20} px-4`
          : "pt-[50px]"
      } mb-[70px]`}
    >
      <img
        src={itemViewed?.image}
        className="max-w-[350px] md:ml-[150px] md:mr-[30px] place-self-center"
      />
      <div className="flex flex-col place-content-around md:mr-[50px] md:m[30px]">
        <h2 className="text-[30px] font-semibold italic wrap">
          {itemViewed?.title}
        </h2>
        <p className="text-[30px] text-lime-700">£{itemViewed?.price}</p>
        <div className="place-self-center">
          <ActionButton
            text={"ADD TO BASKET"}
            eventHandler={undefined}
            cyId={undefined}
          />
        </div>
        <p className="border border-black rounded-lg p-4">
          {itemViewed?.description}
        </p>
      </div>
    </main>
  );
}

export default Item;
