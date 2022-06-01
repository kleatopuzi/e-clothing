import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import "./shop.style.scss";

import { fetchCollectionStartAsync } from "../../redux/shop/shop.action";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionsPageContainer from "../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }
  render() {
    // const { isCollectionLoaded } = this.props;
    return (
      <div className="shop-page">
        <Routes>
          <Route path="/" element={<CollectionsOverviewContainer />}></Route>
          <Route
            path=":collectionId"
            element={<CollectionsPageContainer />}
          ></Route>
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
