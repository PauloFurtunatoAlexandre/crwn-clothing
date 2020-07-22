import React from "react";

import CollectionsOverview from "../collections-overview/Collections-overview.component";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    <CollectionsOverview collections={collections} />
  </div>
);

export default ShopPage;
