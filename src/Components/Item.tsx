"use client";
import { getRequest } from "../utils/api";
import { useEffect, useState } from "react";
import ActionButton from "./ActionButton";

function Item({ id } : {id: string}) {
  const [item, setItem] = useState<{
    id: string;
    image: string;
    title: string;
    price: number;
    description: string;
  } | null>(null);

  useEffect(() => {
    getRequest(`/products/${id}`, { params: { id } }).then((item) => {
      setItem(item);
    });
  }, [id]);

  if (item === null) {
    return <div>Loading...</div>;
  }

  return (
    <main className={"flex flex-col px-4 pt-[50px] mb-[70px]"}>
      <img
        src={item?.image}
        className="max-w-[350px] md:ml-[150px] md:mr-[30px] place-self-center"
      />
      <div className="flex flex-col place-content-around md:mr-[50px] md:m[30px]">
        <h2 className="text-[30px] font-semibold italic wrap">{item?.title}</h2>
        <p className="text-[30px] text-lime-700">£{item?.price}</p>
        <div className="place-self-center">
          <ActionButton
            text={"ADD TO BASKET"}
            eventHandler={undefined}
            cyId={undefined}
          />
        </div>
        <p className="border border-black rounded-lg p-4">
          {item?.description}
        </p>
      </div>
    </main>
  );
}

export default Item;
