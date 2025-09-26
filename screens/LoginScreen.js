import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { UserContext } from "../context/UserContext";

const MOCK_USERS = [
  { id: 1, name: "Ali", roles: ["customer"] },
  { id: 2, name: "Ayşe", roles: ["waiter", "cashier"] },
  { id: 3, name: "Mehmet", roles: ["chef"] },
  { id: 4, name: "Admin", roles: ["admin"] },
];

export default function LoginScreen() {
  const { setUser, setActiveRole } = useContext(UserContext);
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    const found = MOCK_USERS.find(u => u.name.toLowerCase() === username.trim().toLowerCase());
    if (!found) {
      Alert.alert(
        "Kullanıcı bulunamadı", 
        "Denemek için örnek isimlerden birini yazın: Ali, Ayşe, Mehmet, Admin"
      );
      return;
    }
    setUser(found);
    if (found.roles.length === 1) {
      setActiveRole(found.roles[0]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restoran Sipariş Sistemi</Text>
      <TextInput
        placeholder="Kullanıcı adınızı girin (ör: Ali)"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
      />
      <TouchableOpacity style={styles.btn} onPress={handleLogin} activeOpacity={0.8}>
        <Text style={styles.btnText}>Giriş Yap</Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        Örnek kullanıcılar:{" "}
        <Text style={styles.examples}>Ali, Ayşe, Mehmet, Admin</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 35,
    color: "#2c3e50",
    letterSpacing: 1,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#ec7f13",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontSize: 18,
    backgroundColor: "#fff",
    marginBottom: 25,
    shadowColor: "#ec7f13",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
    elevation: 8,
  },
  btn: {
    backgroundColor: "#ec7f13",
    paddingVertical: 16,
    borderRadius: 30,
    shadowColor: "#ec7f13",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 12,
    elevation: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: 1,
  },
  note: {
    marginTop: 30,
    textAlign: "center",
    color: "#7f8c8d",
    fontSize: 14,
    fontWeight: "600",
  },
  examples: {
    color: "#ec7f13",
    fontWeight: "900",
  },
});
