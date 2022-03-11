import { createContext, useState } from "react";

export const AuthProvider = createContext({});

export const AuthContext = ({ children }) => {
  const [data, setData] = useState("context working");

  return (
    <AuthProvider.Provider value={{ data }}>{children}</AuthProvider.Provider>
  );
};
