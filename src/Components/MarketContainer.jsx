import { Routes, Route, Navigate } from "react-router-dom";
import AllItems from "./AllItems";
import ListItem from "./ListItem";
import MyAccount from "./MyAccount";
import Item from "./Item";
import { useState } from "react";
import Login from "./Login";

function MarketContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  return (
    <Routes>
      <Route
        path="/items"
        element={
          <AllItems />
        }
      />
      <Route
        path="/login"
        element=
            {<Login setUser={setUser} setIsLoggedIn={setIsLoggedIn} />}
      />
      <Route
        path="/list-item"
        element={
          isLoggedIn ? (
            <ListItem  />
          ) : (
            <Navigate to="/login" />
          )
        }
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
      <Route path="/items/:item_id" element={<Item/>} />
    </Routes>
  );
}
export default MarketContainer;
