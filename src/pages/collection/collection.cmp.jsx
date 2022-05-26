import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import { useLocation, useParams } from "react-router-dom";
import CollectionItem from "../../components/collection-item/collection-item.cmp";
import "./collection.style.scss";

const CollectionPage = ({ collection }) => {
  const params = useParams();
  collection = params;
  // let location = useLocation();
  // params = collection;
  // console.log("LOG", collection);
  console.log("LOG", params, collection);
  return (
    <div className="category">
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
