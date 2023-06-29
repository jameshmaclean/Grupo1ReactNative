import React from "react";
import Rotas from ".";
import AuthProvider from "../contexts/authContext";
import CartProvider from "../contexts/cartContext";

const Navigation = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Rotas />
      </CartProvider>
    </AuthProvider>
  );
};

export default Navigation;
