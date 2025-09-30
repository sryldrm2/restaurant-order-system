import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./CartPage.css";

const CartPage = ({ cart, removeFromCart, updateQuantity, calculateTotal, placeOrder }) => {
  const total = calculateTotal();

  return (
    <div className="cart-page">
      <Header />
      
      <div className="cart-container">
        <h2 className="cart-title">Sepetiniz</h2>
        
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Sepetiniz boş</p>
            <Link to="/" className="back-to-menu-btn">
              Menüye Dön
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            {/* Sepet Öğeleri */}
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-description">Lezzetli ve taze</p>
                    
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn minus"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn plus"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    
                    <div className="item-price">${item.price}</div>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Kaldır
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Sipariş Özeti */}
            <div className="order-summary">
              <div className="summary-row">
                <span className="summary-label">Toplam:</span>
                <span className="summary-value">${total.toFixed(2)}</span>
              </div>
            </div>
            
            {/* Sipariş Ver Butonu */}
            <button 
              className="place-order-btn"
              onClick={placeOrder}
            >
              Sipariş Ver
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;