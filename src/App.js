import React from "react";
// import { Route, Routes } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import "./App.css";
// import HatsPage from "./hats";
import HomePage from "./pages/homepage/homepage.cmp";
import ShopPage from "./pages/shop/shop.cmp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
      </Routes>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
