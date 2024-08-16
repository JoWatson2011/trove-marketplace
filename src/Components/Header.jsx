import { Link } from "react-router-dom";
import { useContext } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import GitHubIcon from "@mui/icons-material/GitHub";
import { UserContext } from "../context/UserContext";
import { UserDispatchContext } from "../context/UserContext";

function Header() {
  const { userDetails } = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);

  return (
    <header className="my-2 md:mr-10 sm:max-md:sticky sm:max-md:top-0">
      <div className="md:flex md:justify-between space-y-6">
        <p className="text-slate-500 text-sm ">
          This website was built by Jo Watson as a portfolio project.{" "}
          <a
            href="https://github.com/JoWatson2011/trove-marketplace"
            className="underline hover:text-black"
          >
            Source code here
            <GitHubIcon className="mx-1" />
          </a>
        </p>
        <nav className="flex justify-end text-[0.75rem] gap-x-5 text-slate-700 italic">
          <p>Create Account</p>
          {userDetails.username ? (
            <button
              data-cy="logout-button"
              onClick={() => {
                dispatch({ type: "logout" });
              }}
              className="italic"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
          {userDetails.username ? (
            <Link to="/my-account">My Account</Link>
          ) : null}
        </nav>
      </div>
      <Link to="/">
        <h1 className="text-[70px] italic font-bold text-right hover:not-italic active:text-lime-700">
          trove
        </h1>
      </Link>
      <nav className="flex justify-end space-x-5 my-3">
        <Link to="/items">
          <p className="font-bold italic hover:text-lime-700 hover:bg-slate-50 focus:not-italic  border border-gray-600 rounded-full p-2">
            BUY
          </p>
        </Link>
        <Link to="/list-item">
          <p className="font-bold italic  hover:text-lime-700 hover:bg-slate-50 border border-gray-600 rounded-full p-2">
            SELL
          </p>
        </Link>
        <div className="border border-gray-600 hover:bg-slate-50 hover:text-lime-700 rounded-full px-2 py-1">
          <ShoppingBasketIcon />
        </div>
      </nav>
    </header>
  );
}

export default Header;
