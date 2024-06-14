import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="title">
        <nav className="small-nav-bar">
          <p className=" bg-slate-400">Create Account</p>
          <Link to="/login">Login</Link>
          <Link to="/my-account">My Account</Link>
        </nav>
        <Link to="/" className=" active:text-red-900 ">
          <h1>NC Marketplace</h1>
        </Link>
      </div>
      <div>
        <nav className="nav-bar">
          <Link to="/items">Items for Sale</Link>
          <Link to="/list-item">List an Item</Link>
          <p>Basket</p>
        </nav>
      </div>
    </div>
  );
}

export default Header;
