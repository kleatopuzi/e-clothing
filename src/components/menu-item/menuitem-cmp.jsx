import React from "react";
import { Link } from "react-router-dom";

import "./menuitem-style.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, props }) => {
  // const para = useParams();
  return (
    <Link className={`${size} menu-item`} to={linkUrl}>
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
    </Link>
  );
};

export default MenuItem;
