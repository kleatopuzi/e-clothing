import React from "react";
import "./menuitem-style.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  console.log(imageUrl);

  return (
    <div className={`${size} menu-item`}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
          // backgroundImage: `url(https://i.ibb.co/px2tCc3/jackets.png)`,
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
