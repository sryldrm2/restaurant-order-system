import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function CustomerOrdersScreen({ route }) {
  const { orders } = route.params || { orders: [] };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Siparişlerim</Text>
      {orders.length === 0 ? (
        <Text>Henüz sipariş yok.</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item, index) => item.id + index}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.name} - {item.price}₺</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20 },
  title: { fontSize:24, marginBottom:10, textAlign:"center" },
  item: { padding:10, borderBottomWidth:1, borderBottomColor:"#ccc" },
});
