import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <header className="my-2 md:mx-10 sm:max-md:sticky sm:max-md:top-0">
      <nav className="flex justify-end text-[0.75rem] gap-x-5">
        <p className=" bg-slate-400">Create Account</p>
        <Link to="/login">Login</Link>
        <Link to="/my-account">My Account</Link>
      </nav>
      <Link to="/" className=" active:text-red-900 ">
        <h1 className="text-[70px] m-4 italic font-bold text-right hover:not-italic">
          trove
        </h1>
      </Link>
      <nav className="flex justify-end space-x-10 m-3">
        <Link to="/items">
          <p className="font-bold italic hover:not-italic focus:not-italic">
            BUY
          </p>
        </Link>
        <Link to="/list-item">
          <p className="font-bold italic  hover:not-italic focus:not-italic">
            SELL
          </p>
        </Link>
        <ShoppingBasketIcon />
      </nav>
    </header>
  );
}

export default Header;
