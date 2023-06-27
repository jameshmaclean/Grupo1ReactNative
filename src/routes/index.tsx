import "react-native-gesture-handler";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Header from "../components/Header";
import { ContainerFoto, ImagemDrawer, TextoDrawer } from "./styles";
import { useAuth } from "../contexts/authContext";
import { NavigationContainer } from "@react-navigation/native";
import RotasPrivadas from "./RotasPrivadas";
import RotasPublicas from "./RotasPublicas";
const Drawer = createDrawerNavigator();
const Rotas = () => {
  const { id } = useAuth();

  return (
    <>
      {id ? <RotasPrivadas /> : <RotasPublicas />}
    </>
  );
};
export default Rotas;
