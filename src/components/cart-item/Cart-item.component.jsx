import React from "react";

import { connect } from "react-redux";

import {
  clearItemFromCart,
  // addItem,
  // removeItem,
} from "../../redux/cart/cart.actions";

import "./Cart-item.styles.scss";

const CartItem = ({ item, cleartItem }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className="cart-item">
      <img className="cart-item-image" src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name} </span>
        <span className="price">
          {quantity} x $ {price}
        </span>
        <span className="remove-button" onClick={() => cleartItem(item)}>
          <span className="remove-text">Remove Item(s)</span> &#10006;
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  cleartItem: (item) => dispatch(clearItemFromCart(item)),
  // addItem: (item) => dispatch(addItem(item)),
  // removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
