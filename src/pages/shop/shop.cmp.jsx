import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./shop.style.scss";

import CollectionsOverview from "../../components/collections-overview/collections-overview.cmp";
import CollectionPage from "../collection/collection.cmp";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.action";
import WithSpinner from "../../components/with-spinner/with-spinner.cmp";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selector";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }
  render() {
    const { isCollectionFetching, isCollectionLoaded } = this.props;
    return (
      <div className="shop-page">
        <Routes>
          <Route
            path="/"
            element={
              <CollectionsOverviewWithSpinner
                isLoading={isCollectionFetching}
              />
            }
          ></Route>
          <Route
            path=":collectionId"
            element={
              <CollectionsPageWithSpinner isLoading={!isCollectionLoaded} />
            }
          ></Route>
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
