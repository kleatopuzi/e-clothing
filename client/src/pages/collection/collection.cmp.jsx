import React from "react";
import { connect, useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/collection-item/collection-item.cmp";
import "./collection.style.scss";

const CollectionPage = ({ collection }) => {
  const params = useParams();
  collection = useSelector((state) =>
    selectCollection(params.collectionId)(state)
  );
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  collection: selectCollection(state),
});
export default connect(mapStateToProps)(CollectionPage);
