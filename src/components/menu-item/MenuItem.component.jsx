import React from "react";

import "./MenuItem.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return(
    <div style={{
      backgroundImage: `url(${imageUrl})`
    }} className={`${size} menu-item`}>
    <div className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
      <div className="content">
        <h2 className="title">{title.toUpperCase()}</h2>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;