import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AllItems from "./AllItems";
import ListItem from "./ListItem";
import MyAccount from "./MyAccount";
import Item from "./Item";
import Login from "./Login";
import { UserContext } from "../context/UserContext";

function MarketContainer() {
  const { userDetails } = useContext(UserContext);
  console.log(userDetails);
  return (
    <Routes>
      <Route path="/items" element={<AllItems />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/list-item"
        element={userDetails.username ? <ListItem /> : <Navigate to="/login" />}
      />
      <Route
        path="/my-account"
        element={userDetails.username ? <MyAccount /> : <Login />}
      />
      <Route path="/items/:item_id" element={<Item />} />
    </Routes>
  );
}
export default MarketContainer;
