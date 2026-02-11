import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../CartSlice";

const plantsData = [
  {
    category: "Aromatic Plants",
    plants: [
      { id: 1, name: "Lavender", price: "$10", image: "/background.jpg" },
      { id: 2, name: "Mint", price: "$8", image: "/background.jpg" },
      { id: 3, name: "Basil", price: "$9", image: "/background.jpg" },
      { id: 4, name: "Rosemary", price: "$11", image: "/background.jpg" },
      { id: 5, name: "Thyme", price: "$7", image: "/background.jpg" },
      { id: 6, name: "Jasmine", price: "$12", image: "/background.jpg" },
    ],
  },
  {
    category: "Medicinal Plants",
    plants: [
      { id: 7, name: "Aloe Vera", price: "$15", image: "/background.jpg" },
      { id: 8, name: "Tulsi", price: "$6", image: "/background.jpg" },
      { id: 9, name: "Neem", price: "$14", image: "/background.jpg" },
      { id: 10, name: "Ashwagandha", price: "$13", image: "/background.jpg" },
      { id: 11, name: "Chamomile", price: "$9", image: "/background.jpg" },
      { id: 12, name: "Eucalyptus", price: "$10", image: "/background.jpg" },
    ],
  },
  {
    category: "Indoor Plants",
    plants: [
      { id: 13, name: "Snake Plant", price: "$18", image: "/background.jpg" },
      { id: 14, name: "Peace Lily", price: "$20", image: "/background.jpg" },
      { id: 15, name: "Spider Plant", price: "$12", image: "/background.jpg" },
      { id: 16, name: "Money Plant", price: "$11", image: "/background.jpg" },
      { id: 17, name: "ZZ Plant", price: "$22", image: "/background.jpg" },
      { id: 18, name: "Areca Palm", price: "$25", image: "/background.jpg" },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({
      ...prev,
      [plant.id]: true,
    }));
  };

  return (
    <div className="product-list">
      {plantsData.map((section) => (
        <div key={section.category}>
          <h2>{section.category}</h2>
          <div className="product-grid">
            {section.plants.map((plant) => (
              <div key={plant.id} className="product-card">
                <img src={plant.image} alt={plant.name} width="150" />
                <h3>{plant.name}</h3>
                <p>{plant.price}</p>

                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedItems[plant.id]}
                >
                  {addedItems[plant.id] ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;