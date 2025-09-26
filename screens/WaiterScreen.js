import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";

const mockOrders = [
  { id: "1", table: "Masa 1", items: ["Pizza", "Cola"], status: "Hazırlanıyor" },
  { id: "2", table: "Masa 2", items: ["Burger", "Ayran"], status: "Hazır" },
];

export default function WaiterScreen() {
  const [orders, setOrders] = useState(mockOrders);

  const markAsDelivered = (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: "Teslim Edildi" } : order
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Garson Paneli</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.table}>{item.table}</Text>
            <Text style={styles.items}>{item.items.join(", ")}</Text>
            <Text style={styles.status}>Durum: {item.status}</Text>
            {item.status !== "Teslim Edildi" && (
              <TouchableOpacity
                onPress={() => markAsDelivered(item.id)}
                style={styles.button}
                activeOpacity={0.7}
              >
                <Text style={styles.buttonText}>Teslim Et</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f7f6",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
    color: "#2c3e50",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  table: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
    color: "#34495e",
  },
  items: {
    fontSize: 15,
    marginBottom: 4,
    color: "#7f8c8d",
  },
  status: {
    fontSize: 14,
    color: "#95a5a6",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#27ae60",
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
});
