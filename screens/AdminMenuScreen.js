import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";

const mockUsers = [
  { id: "1", name: "Ahmet", roles: ["Garson"] },
  { id: "2", name: "Mehmet", roles: ["Şef"] },
  { id: "3", name: "Ayşe", roles: ["Kasiyer", "Garson"] },
];

const mockStats = {
  totalOrders: 25,
  pendingOrders: 5,
  completedOrders: 20,
  revenue: 3250,
};

export default function AdminMenuScreen() {
  const [users, setUsers] = useState(mockUsers);

  const assignRole = (id, newRole) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id && !user.roles.includes(newRole)
          ? { ...user, roles: [...user.roles, newRole] }
          : user
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Paneli</Text>

      <View style={styles.statsCard}>
        <Text style={styles.statsTitle}>İstatistikler</Text>
        <Text style={styles.statsText}>Toplam Sipariş: {mockStats.totalOrders}</Text>
        <Text style={styles.statsText}>Bekleyen Sipariş: {mockStats.pendingOrders}</Text>
        <Text style={styles.statsText}>Tamamlanan Sipariş: {mockStats.completedOrders}</Text>
        <Text style={[styles.statsText, styles.revenue]}>
          Gelir: {mockStats.revenue} ₺
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Çalışanlar</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.userRoles}>Roller: {item.roles.join(", ")}</Text>

            <View style={styles.roleButtonsContainer}>
              {["Garson", "Şef", "Kasiyer"].map((role) => (
                <TouchableOpacity
                  key={role}
                  onPress={() => assignRole(item.id, role)}
                  style={styles.roleButton}
                  activeOpacity={0.7}
                >
                  <Text style={styles.roleButtonText}>{role} Ekle</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6", // açık gri, modern
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 20,
  },
  statsCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 16,
    marginBottom: 25,
    // Shadow iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    // Shadow Android
    elevation: 8,
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111827",
  },
  statsText: {
    fontSize: 16,
    color: "#374151",
    marginBottom: 6,
  },
  revenue: {
    fontWeight: "700",
    color: "#10b981", // canlı yeşil
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111827",
  },
  userCard: {
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
  userName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 6,
  },
  userRoles: {
    fontSize: 15,
    color: "#6b7280",
  },
  roleButtonsContainer: {
    flexDirection: "row",
    marginTop: 14,
    flexWrap: "wrap",
  },
  roleButton: {
    backgroundColor: "#3b82f6", // parlak mavi
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  roleButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
});
