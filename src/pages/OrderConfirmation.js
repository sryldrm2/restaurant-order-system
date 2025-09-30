import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./OrderConfirmation.css";

const OrderConfirmation = () => {
  return (
    <div className="confirmation-page">
      <Header />
      
      <div className="confirmation-container">
        <div className="confirmation-content">
          {/* Başarı İkonu */}
          <div className="success-icon">
            <div className="checkmark">
              <div className="checkmark-circle">
                <div className="checkmark-stem"></div>
                <div className="checkmark-kick"></div>
              </div>
            </div>
          </div>
          
          {/* Başlık */}
          <h1 className="confirmation-title">Siparişiniz Verildi!</h1>
          
          {/* Açıklama */}
          <p className="confirmation-message">
            Siparişiniz başarıyla alındı. Garson siparişinizi getirene kadar bekleyin.
          </p>
          
          {/* Ek Bilgiler */}
          <div className="order-info">
            <div className="info-item">
              <span className="info-label">Tahmini Süre:</span>
              <span className="info-value">15-20 dakika</span>
            </div>
            <div className="info-item">
              <span className="info-label">Sipariş No:</span>
              <span className="info-value">#{Math.floor(Math.random() * 10000)}</span>
            </div>
          </div>
          
          {/* Butonlar */}
          <div className="action-buttons">
            <Link to="/" className="back-to-menu-btn">
              Menüye Dön
            </Link>
            <button className="new-order-btn" onClick={() => window.location.href = "/"}>
              Yeni Sipariş
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
