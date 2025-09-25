import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CustomerMenuScreen from "../screens/CustomerMenuScreen";
import CustomerOrdersScreen from "../screens/CustomerOrdersScreen";
import WaiterScreen from "../screens/WaiterScreen";
import ChefScreen from "../screens/ChefScreen";
import CashierScreen from "../screens/CashierScreen";
import AdminMenuScreen from "../screens/AdminMenuScreen";
import { View, Text, Button } from "react-native";

const Stack = createNativeStackNavigator();

// Mock Login
function LoginScreen({ setRole }) {
  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <Text>Login Screen</Text>
      <Button title="Müşteri" onPress={()=>setRole("customer")} />
      <Button title="Garson" onPress={()=>setRole("waiter")} />
      <Button title="Aşçı" onPress={()=>setRole("chef")} />
      <Button title="Kasiyer" onPress={()=>setRole("cashier")} />
      <Button title="Admin" onPress={()=>setRole("admin")} />
    </View>
  )
}

//Stack = ekranlar yığını, ekran geçişlerini yönetir. Kullanıcı bir ekrana geçtiğinde önceki ekran kaybolmaz, geri dönebilir
export default function AppNavigator() {
  const [role, setRole] = useState(null);
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!role ? (
          <Stack.Screen name="Login">
            {(props)=> <LoginScreen {...props} setRole={setRole} />}
          </Stack.Screen>
        ) : role === "customer" ? (
          <>
            <Stack.Screen name="CustomerMenu" component={CustomerMenuScreen}/>
            <Stack.Screen name="CustomerOrders" component={CustomerOrdersScreen}/>
          </>
        ) : role === "waiter" ? (
          <Stack.Screen name="Waiter" component={WaiterScreen}/>
        ) : role === "chef" ? (
          <Stack.Screen name="Chef" component={ChefScreen}/>
        ) : role === "cashier" ? (
          <Stack.Screen name="Cashier" component={CashierScreen}/>
        ) : role === "admin" ? (
          <Stack.Screen name="Admin" component={AdminMenuScreen}/>
        ) : null}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
