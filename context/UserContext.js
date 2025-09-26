// context/UserContext.js
import React, { createContext, useState } from "react";

// Kullanıcı ve aktif rol bilgisini tüm uygulama boyunca tutan context
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);       // { name: "Ahmet", roles: ["customer", "waiter"] }
  const [activeRole, setActiveRole] = useState(null); // "customer", "waiter", "chef", "cashier", "admin"

  return (
    <UserContext.Provider value={{ user, setUser, activeRole, setActiveRole }}>
      {children}
    </UserContext.Provider>
  );
};
