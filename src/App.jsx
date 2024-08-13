// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import MarketContainer from "./Components/MarketContainer";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./output.css";
function App() {
  return (
    <BrowserRouter className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<MarketContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
