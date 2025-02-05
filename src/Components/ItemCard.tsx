import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Link from "next/link";
import Image from "next/image";

function ItemCard({
  item,
}: {
  item: {
    id: string;
    title: string;
    image: string;
    category: string;
    price: number;
  };
}) {
  return (
    <div className="flex flex-col justify-between mx-1 my-1 w-[286px] p-3">
      <Link href={`/items/${item.id}`}>
        <Image
          src={item.image}
          width={286}
          height={180}
          alt={item.title}
          unoptimized={true}
          className="mb-3 border border-black rounded-xl h-[180px] object-contain"
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
