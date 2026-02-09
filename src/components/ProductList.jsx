import React from "react";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    image: "https://images.unsplash.com/photo-1587502537745-84d0b2f5c3c2?w=200"
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32f8de5?w=200"
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 20,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200"
  }
];

function ProductList() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Plant Shop</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              width: "200px",
              textAlign: "center"
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;