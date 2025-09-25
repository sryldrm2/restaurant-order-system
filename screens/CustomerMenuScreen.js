import React, { useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

export default function CustomerMenuScreen({ navigation }) {
  // Örnek menü ürünleri
  const menuItems = [
    { id: '1', name: 'Hamburger', price: 30 },
    { id: '2', name: 'Pizza', price: 50 },
    { id: '3', name: 'Coca-Cola', price: 10 },
    { id: '4', name: 'Salata', price: 20 },
  ];

  // Seçilen siparişleri tutacak state
  const [orders, setOrders] = useState([]);

  // Ürün seçildiğinde çağrılacak
  const addOrder = (item) => {
    setOrders([...orders, item]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Müşteri Menüsü</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.name} - {item.price}₺</Text>
            <Button title="Sipariş Ver" onPress={() => addOrder(item)} />
          </View>
        )}
      />

      {orders.length > 0 && (
        <Button
          title="Siparişlerim"
          onPress={() => navigation.navigate("CustomerOrders", { orders })}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20 },
  title: { fontSize:24, marginBottom:10, textAlign:"center" },
  itemContainer: { marginVertical:5, flexDirection:"row", justifyContent:"space-between", alignItems:"center" },
});
