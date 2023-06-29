import React from "react";
import Rotas from ".";
import AuthProvider from "../contexts/authContext";
import { useContext } from 'react'
import { ThemeProvider } from "styled-components";
import { CurTheme } from "../contexts/themeContext";
import nat from "../themes/nat";
import dark from "../themes/dark";

const Navigation = () => {
  const {light} = useContext(CurTheme)

  return (
    <ThemeProvider theme={light ? nat : dark}>
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Navigation;
