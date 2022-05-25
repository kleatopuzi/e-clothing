import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.cmp";
import "./collection.style.scss";

const CollectionPage = ({ collection }) => {
  console.log("LOG", collection);
  return (
    <div className="category">
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps)(state),
});

export default connect(mapStateToProps)(CollectionPage);
