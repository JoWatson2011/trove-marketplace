import { Routes, Route, Navigate } from "react-router-dom";
import AllItems from "./AllItems";
import ListItem from "./ListItem";
import MyAccount from "./MyAccount";
import { useState } from "react";
import Login from "./Login";

function MarketContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    username: "",
    avatar_url: "",
    kudos: 0,
    items_in_basket: 0,
    items_ordered: 0,
  });
  return (
    <Routes>
      <Route path="/items" element={<AllItems />} />
      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <MyAccount />
          ) : (
            <Login setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
          )
        }
      />
      <Route
        path="/list-item"
        element={isLoggedIn ? <ListItem /> : <Navigate to="/login" />}
      />
      <Route
        path="/my-account"
        element={
          isLoggedIn ? (
            <MyAccount />
          ) : (
            <Login setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
          )
        }
      />
    </Routes>
  );
}
export default MarketContainer;
