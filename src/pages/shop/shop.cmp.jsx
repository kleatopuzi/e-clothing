import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import CollectionsOverview from "../../components/collections-overview/collections-overview.cmp";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase-utils";
import CollectionPage from "../collection/collection.cmp";
import { updateCollection } from "../../redux/shop/shop.action";

import "./shop.style.scss";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapShot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollection(collectionsMap);
    });
    // const { setCurrentUser, collectionArray } = this.props;
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Routes>
          <Route path="/" element={<CollectionsOverview />}></Route>
          <Route path=":collectionId" element={<CollectionPage />}></Route>
        </Routes>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collectionsMap) =>
    dispatch(updateCollection(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
