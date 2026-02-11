import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../CartSlice";

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      return total + parseFloat(item.price.substring(1)) * item.quantity;
    }, 0);
  };

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckoutShopping = () => {
    alert("Coming Soon");
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 && <p>Your cart is empty.</p>}

      {cartItems.map((item) => (
        <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
          <img src={item.image} alt={item.name} width="100" />
          <h3>{item.name}</h3>
          <p>Unit Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>
            Subtotal: $
            {(
              parseFloat(item.price.substring(1)) * item.quantity
            ).toFixed(2)}
          </p>

          <button onClick={() => handleIncrement(item)}>+</button>
          <button onClick={() => handleDecrement(item)}>-</button>
          <button onClick={() => handleRemove(item.id)}>Delete</button>
        </div>
      ))}

      <h3>Total Amount: ${calculateTotalAmount().toFixed(2)}</h3>

      <button onClick={onContinueShopping}>Continue Shopping</button>
      <button onClick={handleCheckoutShopping}>Checkout</button>
    </div>
  );
};

export default CartItem;