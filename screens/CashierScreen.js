import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

export default function CashierScreen() {
  const [payments, setPayments] = useState([
    { id: "1", table: "Masa 5", amount: 150, status: "Ödenmedi" },
    { id: "2", table: "Masa 6", amount: 200, status: "Ödendi" },
    { id: "3", table: "Masa 7", amount: 75, status: "Ödenmedi" },
  ]);

  const markAsPaid = (id) => {
    setPayments((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Ödendi" } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kasiyer Paneli</Text>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {payments.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.tableName}>{item.table}</Text>
            <Text style={styles.amount}>Tutar: {item.amount} ₺</Text>
            <Text style={styles.status}>
              Durum:{" "}
              <Text
                style={[
                  styles.statusText,
                  item.status === "Ödendi"
                    ? styles.paid
                    : styles.unpaid,
                ]}
              >
                {item.status}
              </Text>
            </Text>

            {item.status === "Ödenmedi" && (
              <TouchableOpacity
                onPress={() => markAsPaid(item.id)}
                style={styles.payButton}
                activeOpacity={0.8}
              >
                <Text style={styles.payButtonText}>Ödeme Al</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f7f6", // açık arkaplan
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#221910", // koyu renk
    marginBottom: 16,
    fontFamily: "System",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // android shadow
  },
  tableName: {
    fontWeight: "700",
    fontSize: 18,
    color: "#221910",
    marginBottom: 4,
  },
  amount: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    color: "#777",
  },
  statusText: {
    fontWeight: "600",
  },
  paid: {
    color: "#16a34a", // yeşil (ödendi)
  },
  unpaid: {
    color: "#b91c1c", // kırmızı (ödenmedi)
  },
  payButton: {
    marginTop: 12,
    backgroundColor: "#7c3aed", // mor ton
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
  payButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
