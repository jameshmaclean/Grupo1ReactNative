import React from "react";
import Rotas from ".";
import AuthProvider from "../contexts/authContext";

const Navigation = () => {
  return (
      <AuthProvider>
        <Rotas />
      </AuthProvider>
  );
};

export default Navigation;
