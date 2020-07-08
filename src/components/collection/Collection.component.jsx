import React from "react";

import CollectionItem from "../collection-item/CollectionItem.component";

import "./collection.styles.scss";

const Collection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(( item ) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default Collection;
