import React from "react";
import { connect, useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/collection-item/collection-item.cmp";
import "./collection.style.scss";
import useCurrentPath from "../../utils/path.pattern.utils";

const CollectionPage = ({ collection }) => {
  const params = useParams();
  const myCollection = useSelector((state) =>
    selectCollection(params.collectionId)(state)
  );
  // lo = useLocation();
  console.log("LOG", myCollection);

  return (
    <div className="category">
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};
const mapStateToProps = (state) => ({
  collection: selectCollection(state),
});
export default connect(mapStateToProps)(CollectionPage);
