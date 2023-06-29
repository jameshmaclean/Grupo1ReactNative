import React, { createContext, useContext } from "react";

interface IProps {
  children: React.ReactElement;
}

export const cartContext = createContext({});

const CartProvider: React.FC<IProps> = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => {
  const context = React.useContext(cartContext);
  if (!context) {
    throw new Error("Use auth deve ser utilizado com um AuthProvider");
  }
  return context;
};

export default CartProvider;
