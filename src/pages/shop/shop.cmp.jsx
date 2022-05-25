import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./shop.style.scss";

// import SHOP_DATA from "./shopData";
import PreviewCollection from "../../components/preview-collections/preview-collections.cmp";
import { selectCollections } from "../../redux/shop/shop.selector";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...collProps }) => (
      <PreviewCollection key={id} {...collProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
