import React from "react";
import menuData from "../data/menuData";
import Header from "../components/Header";
import "./MenuPage.css";

const MenuPage = ({ addToCart }) => {
  return (
    <div className="menu-page">
      <Header />
      <div className="menu-container">
        <h2 className="menu-title">Menu</h2>
        <div className="menu-grid">
          {menuData.map(item => (
            <div key={item.id} className="menu-item">
              <div className="menu-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="menu-item-content">
                <h3 className="menu-item-name">{item.name}</h3>
                <p className="menu-item-price">${item.price}</p>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
