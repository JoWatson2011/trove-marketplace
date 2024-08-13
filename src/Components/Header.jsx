import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="title">
        <nav className="flex justify-end text-[0.75rem] gap-x-5">
          <p className=" bg-slate-400">Create Account</p>
          <Link to="/login">Login</Link>
          <Link to="/my-account">My Account</Link>
        </nav>
        <Link to="/" className=" active:text-red-900 ">
          <h1 className="text-[70px] m-4 hover:italic">trove</h1>
        </Link>
      </div>
      <div>
        <nav className="flex justify-evenly">
          <Link to="/items">Items for Sale</Link>
          <Link to="/list-item">List an Item</Link>
          <p>Basket</p>
        </nav>
      </div>
    </div>
  );
}

export default Header;
