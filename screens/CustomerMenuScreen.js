import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";

const mockMenu = {
  Appetizers: [
    { name: "Crispy Calamari", price: "$12.99", tag: "Popular", img: "https://via.placeholder.com/100" },
    { name: "Spinach Artichoke Dip", price: "$9.99", img: "https://via.placeholder.com/100" },
  ],
  "Main Courses": [
    { name: "Grilled Salmon", price: "$18.99", img: "https://via.placeholder.com/100" },
    { name: "Filet Mignon", price: "$29.99", img: "https://via.placeholder.com/100" },
  ],
  Desserts: [
    { name: "Chocolate Lava Cake", price: "$8.99", img: "https://via.placeholder.com/100" },
    { name: "Cheesecake", price: "$7.99", img: "https://via.placeholder.com/100" },
  ],
};

export default function CustomerMenuScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Menu</Text>
        <TouchableOpacity style={styles.cartBtn} activeOpacity={0.7}>
          <Text style={styles.cartIcon}>🛒</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 80 }}>
        {Object.keys(mockMenu).map((category) => (
          <View key={category} style={{ marginBottom: 30 }}>
            <Text style={styles.sectionTitle}>{category}</Text>
            {mockMenu[category].map((item, index) => (
              <View key={index} style={styles.card}>
                <View style={{ flex: 1 }}>
                  {item.tag && <Text style={styles.tag}>{item.tag}</Text>}
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                  <TouchableOpacity style={styles.addBtn} activeOpacity={0.6}>
                    <Text style={styles.addBtnText}>+ Add</Text>
                  </TouchableOpacity>
                </View>
                <Image source={{ uri: item.img }} style={styles.itemImg} />
              </View>
            ))}
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        {["Menu", "Cart", "Orders"].map((label) => (
          <TouchableOpacity key={label} style={styles.navBtn} activeOpacity={0.7}>
            <Text style={styles.navText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fefefe" 
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: { 
    fontSize: 24, 
    fontWeight: "800",
    color: "#1f2937",
  },
  cartBtn: { 
    position: "relative",
    padding: 6,
  },
  cartIcon: { 
    fontSize: 28,
  },
  badge: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: "#ef4444", // kırmızı
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: { 
    color: "#fff", 
    fontSize: 12, 
    fontWeight: "bold",
  },
  sectionTitle: { 
    fontSize: 22, 
    fontWeight: "700", 
    marginLeft: 20, 
    marginBottom: 15,
    color: "#111827",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 16,
    padding: 15,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  tag: { 
    color: "#f97316", // turuncu
    fontWeight: "700", 
    fontSize: 12,
    marginBottom: 4,
  },
  itemName: { 
    fontSize: 18, 
    fontWeight: "700", 
    color: "#111827",
  },
  itemPrice: { 
    color: "#6b7280", // gri
    marginVertical: 6,
    fontSize: 14,
  },
  addBtn: { 
    backgroundColor: "#f97316", 
    paddingVertical: 8, 
    paddingHorizontal: 20, 
    borderRadius: 20, 
    marginTop: 8,
    alignSelf: "flex-start",
    shadowColor: "#f97316",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 6,
  },
  addBtnText: { 
    color: "#fff", 
    fontWeight: "700",
    fontSize: 16,
  },
  itemImg: { 
    width: 90, 
    height: 90, 
    borderRadius: 14, 
    marginLeft: 15,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navBtn: { 
    alignItems: "center",
    paddingHorizontal: 15,
  },
  navText: { 
    fontSize: 14, 
    fontWeight: "700", 
    color: "#f97316",
  },
});
