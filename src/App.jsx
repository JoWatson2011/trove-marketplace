import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter className="app">
      <Header />
      <Routes>
        <Route path/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
