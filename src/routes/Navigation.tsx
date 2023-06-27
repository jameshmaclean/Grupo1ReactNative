import React from "react";
import Rotas from ".";
import { UserContextProvider } from "../contexts/userContext";
import  AuthProvider  from "../contexts/authContext";

const Navigation = () => {
  return (
    <AuthProvider>
      <UserContextProvider>
        <Rotas />
      </UserContextProvider>
    </AuthProvider>
  );
};

export default Navigation;
