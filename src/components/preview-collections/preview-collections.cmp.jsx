import React from "react";
import "./preview-collections.style.scss";

import CollectionItem from "../collection-item/collection-item.cmp";

const PreviewCollection = ({ title, items }) => {
  console.log(items);

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps} />
            // <div key={item.id}> {item.name}</div>
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
