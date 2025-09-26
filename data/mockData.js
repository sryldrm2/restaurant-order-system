// data/mockData.js
export const menuItems = [
  { id: 1, name: "Pizza Margherita", price: 25, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Burger", price: 18, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Spaghetti", price: 22, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Coca Cola", price: 5, image: "https://via.placeholder.com/150" },
];

export const notificationsMock = [
  { id: 1, type: "order_ready", message: "Pizza Margherita hazır!", role: "waiter" },
  { id: 2, type: "payment_done", message: "Masa 5 ödeme tamamlandı.", role: "cashier" },
];
