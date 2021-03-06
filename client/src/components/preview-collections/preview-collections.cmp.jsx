import React from "react";
import "./preview-collections.style.scss";

import CollectionItem from "../collection-item/collection-item.cmp";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
            // <div key={item.id}> {item.name}</div>
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
