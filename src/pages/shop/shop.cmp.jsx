import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.cmp";
import "./shop.style.scss";
const ShopPage = ({ collections }) => (
  <div className="shop-page">
    <CollectionsOverview></CollectionsOverview>
  </div>
);

export default ShopPage;
