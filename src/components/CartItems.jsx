import React, { useState } from "react";

function CartItem() {
  const [quantity, setQuantity] = useState(1);

  const price = 15;
  const total = quantity * price;

  const addItem = () => {
    setQuantity(quantity + 1);
  };

  const removeItem = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const updateQuantity = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          width: "300px"
        }}
      >
        <h3>Snake Plant</h3>
        <p>Price: ${price}</p>

        <p>
          Quantity:
          <button onClick={removeItem}>-</button>
          <input
            type="number"
            value={quantity}
            onChange={updateQuantity}
            style={{ width: "50px", margin: "0 10px" }}
          />
          <button onClick={addItem}>+</button>
        </p>

        <p>Total: ${total}</p>
      </div>
    </div>
  );
}

export default CartItem;