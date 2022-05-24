import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.cmp";
import CartItem from "../cart-item/cart-item.cmp";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import "./cart.dropdown.style.scss";

const CartDropdown = ({ cartItems }) => {
  // console.log("cart-item2", cartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">YOUR CART IS EMPTY</span>
        )}
      </div>
      <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
