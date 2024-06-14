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
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  return (
    <Routes>
      <Route path="/items" element={<AllItems category={category} setCategory={setCategory} categories={categories} setCategories={setCategories}/>} />
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
        element={isLoggedIn ? <ListItem categories={categories} setCategories={setCategories}/> : <Navigate to="/login" />}
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
