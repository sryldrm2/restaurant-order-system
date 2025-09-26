import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";

const mockOrders = [
  { id: "1", table: "Masa 3", items: ["Lahmacun", "Ayran"], status: "Beklemede" },
  { id: "2", table: "Masa 4", items: ["Tavuk Izgara", "Salata"], status: "Beklemede" },
];

export default function ChefScreen() {
  const [orders, setOrders] = useState(mockOrders);

  const markAsReady = (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: "Hazır" } : order
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Şef Paneli</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <Text style={styles.tableName}>{item.table}</Text>
            <Text style={styles.items}>{item.items.join(", ")}</Text>
            <Text style={styles.status}>Durum: {item.status}</Text>

            {item.status === "Beklemede" && (
              <TouchableOpacity
                onPress={() => markAsReady(item.id)}
                style={styles.readyButton}
                activeOpacity={0.7}
              >
                <Text style={styles.readyButtonText}>Hazırla</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6", // Açık gri, modern arkaplan
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 20,
  },
  orderCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    // Shadow iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Shadow Android
    elevation: 6,
  },
  tableName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },
  items: {
    fontSize: 15,
    color: "#374151",
    marginBottom: 6,
  },
  status: {
    fontSize: 14,
    color: "#6b7280",
  },
  readyButton: {
    marginTop: 12,
    backgroundColor: "#3b82f6", // parlak mavi
    paddingVertical: 12,
    borderRadius: 12,
  },
  readyButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
});
