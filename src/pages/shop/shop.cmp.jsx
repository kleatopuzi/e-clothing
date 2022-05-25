import React from "react";
import { Route, Routes } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.cmp";
import CollectionPage from "../collection/collection.cmp";
import "./shop.style.scss";

const ShopPage = () => (
  <div className="shop-page">
    <Routes>
      <Route path="/" element={<CollectionsOverview />}></Route>
      <Route path=":collectionId" element={<CollectionPage />}></Route>
    </Routes>
  </div>
);

export default ShopPage;
