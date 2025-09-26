import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet, ScrollView } from "react-native";

const mockMenu = [
  { id: "1", name: "Pizza", price: 120 },
  { id: "2", name: "Burger", price: 90 },
  { id: "3", name: "Makarna", price: 75 },
  { id: "4", name: "Kola", price: 25 },
  { id: "5", name: "Çay", price: 15 },
];

export default function CustomerOrderScreen() {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState(null);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      Alert.alert("Hata", "Sepet boş!");
      return;
    }
    setOrder({ items: cart, status: "Hazırlanıyor" });
    setCart([]);
    Alert.alert("Sipariş Verildi", "Siparişiniz hazırlanıyor.");
  };

  const updateOrderStatus = () => {
    if (!order) return;
    if (order.status === "Hazırlanıyor") {
      setOrder({ ...order, status: "Hazır" });
    } else if (order.status === "Hazır") {
      setOrder({ ...order, status: "Teslim Edildi" });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menü</Text>

      {/* Menü Listesi */}
      <FlatList
        data={mockMenu}
        keyExtractor={(item) => item.id}
        style={{ maxHeight: 250 }}
        contentContainerStyle={{ paddingBottom: 10 }}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <View>
              <Text style={styles.menuItemName}>{item.name}</Text>
              <Text style={styles.menuItemPrice}>{item.price} ₺</Text>
            </View>
            <TouchableOpacity
              onPress={() => addToCart(item)}
              style={styles.addButton}
              activeOpacity={0.7}
            >
              <Text style={styles.addButtonText}>Sepete Ekle</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Sepet */}
      <View style={styles.cartContainer}>
        <Text style={styles.sectionTitle}>Sepet</Text>
        {cart.length === 0 ? (
          <Text style={styles.emptyText}>Sepet boş</Text>
        ) : (
          <ScrollView style={{ maxHeight: 120 }}>
            {cart.map((item, index) => (
              <Text key={index} style={styles.cartItem}>
                {item.name} - {item.price} ₺
              </Text>
            ))}
          </ScrollView>
        )}
        <TouchableOpacity
          onPress={placeOrder}
          style={[styles.placeOrderBtn, cart.length === 0 && { backgroundColor: "#9ca3af" }]}
          disabled={cart.length === 0}
          activeOpacity={0.7}
        >
          <Text style={styles.placeOrderText}>Siparişi Ver</Text>
        </TouchableOpacity>
      </View>

      {/* Sipariş Durumu */}
      {order && (
        <View style={styles.orderStatusContainer}>
          <Text style={styles.sectionTitle}>Sipariş Durumu</Text>
          <Text style={styles.statusText}>Durum: {order.status}</Text>
          <ScrollView style={{ maxHeight: 100 }}>
            {order.items.map((item, index) => (
              <Text key={index} style={styles.orderItem}>
                {item.name} - {item.price} ₺
              </Text>
            ))}
          </ScrollView>
          {order.status !== "Teslim Edildi" && (
            <TouchableOpacity
              onPress={updateOrderStatus}
              style={styles.updateStatusBtn}
              activeOpacity={0.7}
            >
              <Text style={styles.updateStatusText}>Durumu Güncelle</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#f9fafb", 
    padding: 20, 
  },
  title: { 
    fontSize: 28, 
    fontWeight: "bold", 
    marginBottom: 15, 
    color: "#111827",
  },
  menuItem: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  menuItemName: {
    fontWeight: "600",
    fontSize: 18,
    color: "#1f2937",
  },
  menuItemPrice: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 4,
  },
  addButton: {
    backgroundColor: "#10b981",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
    shadowColor: "#10b981",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6,
    elevation: 5,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
  cartContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 7,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111827",
  },
  emptyText: {
    color: "#6b7280",
    fontStyle: "italic",
  },
  cartItem: {
    fontSize: 16,
    color: "#374151",
    marginBottom: 5,
  },
  placeOrderBtn: {
    marginTop: 15,
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#3b82f6",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 7,
    elevation: 6,
  },
  placeOrderText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  orderStatusContainer: {
    backgroundColor: "#fef3c7",
    borderRadius: 15,
    padding: 20,
    marginTop: 25,
    elevation: 3,
    shadowColor: "#d97706",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  statusText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    color: "#92400e",
  },
  orderItem: {
    fontSize: 16,
    color: "#78350f",
    marginBottom: 5,
  },
  updateStatusBtn: {
    marginTop: 15,
    backgroundColor: "#ea580c",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#ea580c",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 7,
    elevation: 7,
  },
  updateStatusText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
