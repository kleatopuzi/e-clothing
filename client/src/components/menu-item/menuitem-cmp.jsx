import React from "react";

// import "./menuitem-style.scss";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./menu-style";

const MenuItem = ({ title, imageUrl, size, linkUrl, props }) => {
  // const para = useParams();
  return (
    <MenuItemContainer className={`${size} menu-item`} to={linkUrl}>
      <BackgroundImageContainer
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <ContentContainer className="content">
        <ContentTitle className="title">{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle className="subtitle">SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
