import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [myItemsInventory, setMyItemsInventory] = useState([
    "/items/sword5.png",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [itemsTrading, setItemsTrading] = useState([
    "/items/sword3.png",
    "/items/sword4.png",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [data, setData] = useState("context working");

  return (
    <AuthContext.Provider
      value={{
        data,
        myItemsInventory,
        setMyItemsInventory,
        itemsTrading,
        setItemsTrading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
