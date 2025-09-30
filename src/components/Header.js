import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <div className="logo-shape logo-shape-1"></div>
          <div className="logo-shape logo-shape-2"></div>
          <div className="logo-shape logo-shape-3"></div>
        </div>
        <h1 className="brand-name">TasteBuds</h1>
      </div>
      <div className="header-right">
        <Link to="/cart" className="cart-button">
          <span className="cart-icon">🛒</span>
          Sepete Git
        </Link>
      </div>
    </header>
  );
};

export default Header;

