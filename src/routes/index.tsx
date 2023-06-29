import "react-native-gesture-handler";
import React from "react";
import { useAuth } from "../contexts/authContext";
import RotasPrivadas from "./RotasPrivadas";
import RotasPublicas from "./RotasPublicas";
const Rotas = () => {
  const { id } = useAuth();

  return (
    <>
      {id ? <RotasPrivadas /> : <RotasPublicas />}
    </>
  );
};
export default Rotas;
