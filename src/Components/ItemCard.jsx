import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Link from "next/link";

function ItemCard({ item }) {
  return (
    <div className="flex flex-col justify-center mx-1 my-1 w-[286px] h-[300px]  p-3">
      <Link href={`/items/${item.id}`}>
        <img
          src={item.image}
          className="justify-self-center w-[286px] h-[180px] object-contain mb-3 border border-black rounded-xl"
        />
      </Link>
      <section>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lime-800 ">{item.category}</p>
            <Link href={`/items/${item.id}`}>
              <h3 className="font-bold">
                {item.title.length > 50
                  ? item.title.slice(0, 50) + "..."
                  : item.title}
              </h3>
              <p>{`£${item.price.toFixed(2)}`}</p>
            </Link>
          </div>

          <button className="border border-lime-700 bg-lime-700 rounded-full p-1 hover:bg-lime-500 active:bg-lime-600 ml-2">
            <ShoppingBasketIcon />
          </button>
        </div>
      </section>
    </div>
  );
}
export default ItemCard;
