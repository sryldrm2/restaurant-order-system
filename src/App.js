import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import OrderConfirmation from "./pages/OrderConfirmation";
import QRScanner from "./components/QRScanner";

function App() {
  // Sepet state’i
  const [cart, setCart] = useState([]);

  // Sepete ürün ekleme
  const addToCart = (item) => {
    const index = cart.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].quantity = (newCart[index].quantity || 1) + 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity < 1) return;
    const newCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    );
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity , 0);
  };


  // Siparişi gönderme
  const placeOrder = () => {
    // Burada backend’e sipariş gönderme işlemi gelecek
    // Şimdilik sepeti temizleyip onay sayfasına yönlendiriyoruz
    setCart([]);
    window.location.href = "/confirmation";
  };

  return (
    <Router>
      <Routes>
        {/* Menü ekranı */}
        <Route path="/" element={<MenuPage addToCart={addToCart} />} />

        {/* Sepet ekranı */}
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} calculateTotal={calculateTotal} placeOrder={placeOrder} />} />

        {/* Sipariş onay ekranı */}
        <Route path="/confirmation" element={<OrderConfirmation />} />

        {/* QR Scanner ekranı */}
        <Route path="/scan" element={<QRScanner />} />
      </Routes>
    </Router>
  );
}

export default App;
