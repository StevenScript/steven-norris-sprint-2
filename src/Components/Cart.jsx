import React from "react";
import { useCart } from "./CartContext"; // Adjust the path as needed

const Cart = () => {
  const { cartItems, incrementItem, decrementItem, removeItem, getTotal } =
    useCart();

  return (
    <div className="ordercontainer">
      <div className="orderfullcontainer">
        <div className="orderbox">
          <div id="cart" className="cart">
            {cartItems.map((item, index) => (
              <div key={index} className="CartItems">
                <div className="CartItemsTitle">{item.title}</div>
                <div className="cart-item-controls">
                  <button onClick={() => incrementItem(item.id)}>+</button>
                  <button onClick={() => decrementItem(item.id)}>-</button>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <div className="cart-item-price">
                    ${item.price.toFixed(2)} x {item.quantity} = $
                    {(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button id="confirmButton" className="confirm-button">
          Confirm Order
        </button>
        <div className="CartTotal">Total: ${getTotal()}</div>
      </div>
    </div>
  );
};

export default Cart;
