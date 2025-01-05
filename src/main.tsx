import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./output.css";
import { UserProvider } from "./context/UserContext.jsx";
import { CategoriesProvider } from "./context/CategoriesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <CategoriesProvider>
      <App />
    </CategoriesProvider>
  </UserProvider>
);
