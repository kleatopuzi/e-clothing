import React from "react";

// import { useParams } from "react-router-dom";

// import { useParams } from "react-router-dom";

import "./menuitem-style.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, props }) => {
  // const para = useParams();
  return (
    <div className={`${size} menu-item`}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
