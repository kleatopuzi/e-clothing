import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PreviewCollection from "../../components/preview-collections/preview-collections.cmp";
import { selectCollectionPreview } from "../../redux/shop/shop.selector";
import "./collections-overview.style.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...collProps }) => (
      <PreviewCollection key={id} {...collProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
