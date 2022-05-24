import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.cmp";
import CartItem from "../cart-item/cart-item.cmp";

import "./cart.dropdown.style.scss";

const CartDropdown = ({ cartItems }) => {
  console.log("cart-item2", cartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {/* {console.log("cart-item2aaaaaa", cartItems)} */}
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
