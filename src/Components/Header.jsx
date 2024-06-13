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
          <p>All Items</p>
          <p>Items by Category</p>
          <p>List an Item</p>
          <p>Basket</p>
        </nav>
      </div>
    </div>
  );
}

export default Header;
