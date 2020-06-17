import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/Homepage/Homepage.component";
import ShopPage from "./components/ShopPage/ShopPage.component";
import Header from "./components/Header/Header.component";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up-page/Sign-in-and-sign-up-page.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
