import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
function ItemCard({ item }) {
  return (
    <div className=" w-[18rem] h-auto">
      <Link to={`/items/${item.item_id}`}>
        <img src={item.image} className="w-[150px] m-10" />
      </Link>
      <section>
        <h3>{item.title}</h3>
        <div className="flex justify-between border border-black">
          <p>{`£${item.price.toFixed(2)}`}</p>
          <button>
            <ShoppingBasketIcon />
          </button>
        </div>
      </section>
    </div>
  );
}
export default ItemCard;
