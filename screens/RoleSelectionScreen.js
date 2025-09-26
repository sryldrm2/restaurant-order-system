import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { UserContext } from "../context/UserContext";

export default function RoleSelectionScreen() {
  const { user, setActiveRole } = useContext(UserContext);

  if (!user) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hangi rol ile devam etmek istersiniz?</Text>
      <View style={styles.rolesContainer}>
        {user.roles.map(role => (
          <TouchableOpacity
            key={role}
            style={styles.roleBtn}
            onPress={() => setActiveRole(role)}
            activeOpacity={0.7}
          >
            <Text style={styles.roleText}>
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 30,
    color: "#2c3e50",
    letterSpacing: 0.5,
  },
  rolesContainer: {
    width: "100%",
  },
  roleBtn: {
    backgroundColor: "#ec7f13",
    paddingVertical: 16,
    borderRadius: 25,
    marginBottom: 15,
    shadowColor: "#ec7f13",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 10,
    elevation: 7,
  },
  roleText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 1,
  },
});
