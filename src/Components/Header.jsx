import {Link} from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="title">
        <nav className="small-nav-bar">
          <p>Create Account</p>
          <p>Login</p>
          <p>My Account</p>
        </nav>
        <h1>NC Marketplace</h1>
      </div>
      <div>
        <nav className="nav-bar">
          <Link to="/items" >Items for Sale</Link>
          <Link to="/list-item">List an Item</Link>
          <p>Basket</p>
        </nav>
      </div>
    </div>
  );
}

export default Header;
