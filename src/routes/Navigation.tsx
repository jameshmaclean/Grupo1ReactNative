import React from "react";
import Rotas from "./index";
import AuthProvider from "../contexts/authContext";
import { useContext } from 'react'
import { ThemeProvider } from "styled-components";
import { CurTheme } from "../contexts/themeContext";
import nat from "../themes/nat";
import dark from "../themes/dark";
import CartProvider from "../contexts/cartContext";

const Navigation = () => {
  const {light} = useContext(CurTheme)

  return (
    <ThemeProvider theme={light ? nat : dark}>
      <AuthProvider>
       <CartProvider>
        <Rotas />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Navigation;
