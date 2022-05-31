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
import WithSpinner from "../../components/with-spinner/with-spinner.cmp";

import "./shop.style.scss";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapShot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        console.log("snapshot componentDidMount", collectionsMap);
        updateCollection(collectionsMap);
        this.setState({ loading: false });
      }
    );
    // const { setCurrentUser, collectionArray } = this.props;
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Routes>
          <Route
            path="/"
            element={<CollectionsOverviewWithSpinner isLoading={loading} />}
          ></Route>
          <Route
            path=":collectionId"
            element={<CollectionsPageWithSpinner isLoading={loading} />}
          ></Route>
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
