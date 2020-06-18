import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import { auth } from "../../firebase/Firebase.utils";

import "./Header.styles.scss";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        {/*<Link to="/contact" className="option">CONTACT</Link>*/}
        <Link to="/signin" className="option">
          SIGN IN
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="opstion" to="/signin"></Link>
        )}
      </div>
    </div>
  );
};

export default Header;
