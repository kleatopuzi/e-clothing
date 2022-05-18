import React from "react";
// import { Route, Routes } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.cmp";

const HatsPage = () => {
  return (
    <div>
      <h1> Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/hats" element={<HatsPage />}></Route>
      </Routes>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
