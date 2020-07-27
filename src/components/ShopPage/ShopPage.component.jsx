import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../collections-overview/Collections-overview.component";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    <Route exact path={} component={CollectionsOverview} />
  </div>
);

export default ShopPage;
