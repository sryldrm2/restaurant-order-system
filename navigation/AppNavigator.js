// navigation/AppNavigator.js
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../screens/LoginScreen";
import RoleSelectionScreen from "../screens/RoleSelectionScreen";
import CustomerMenuScreen from "../screens/CustomerMenuScreen";
import WaiterScreen from "../screens/WaiterScreen";
import ChefScreen from "../screens/ChefScreen";
import CashierScreen from "../screens/CashierScreen";
import AdminMenuScreen from "../screens/AdminMenuScreen";

import { UserContext, UserProvider } from "../context/UserContext";

const Stack = createNativeStackNavigator();

function AppStack() {
  const { user, activeRole } = useContext(UserContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : (
        <>
          {/* Eğer birden fazla rolü varsa ve aktif rol seçilmemişse RoleSelection ekranı */}
          {user?.roles?.length > 1 && !activeRole && (
            <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
          )}

          {/* Aktif role göre ekran yönlendirme */}
          {activeRole === "customer" && (
            <Stack.Screen name="CustomerMenu" component={CustomerMenuScreen} />
          )}
          {activeRole === "waiter" && (
            <Stack.Screen name="Waiter" component={WaiterScreen} />
          )}
          {activeRole === "chef" && (
            <Stack.Screen name="Chef" component={ChefScreen} />
          )}
          {activeRole === "cashier" && (
            <Stack.Screen name="Cashier" component={CashierScreen} />
          )}
          {activeRole === "admin" && (
            <Stack.Screen name="AdminMenu" component={AdminMenuScreen} />
          )}
        </>
      )}
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <UserProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </UserProvider>
  );
}
