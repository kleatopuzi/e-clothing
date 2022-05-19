import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.cmp";
import ShopPage from "./pages/shop/shop.cmp";
import Header from "./components/header/header.cmp";
import SignInAndSignUpPage from "./pages/signin-signup/signIn-signUp.cmp";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/signin" element={<SignInAndSignUpPage />}></Route>
      </Routes>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
