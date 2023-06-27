import "react-native-gesture-handler";
import { useContext } from "react";
import Carrinho from "../screens/Carrinho";
import Profile from "../screens/Perfil";
import Produtos from "../screens/Produtos";
import Registro from "../screens/Registro";
import { Login } from "../screens/login";
import {
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Menu from "../screens//Menu";
import PaginaProduto from "../screens/PaginaProduto";
import { UserContext } from "../contexts/userContext";

const Drawer = createDrawerNavigator();

function RotasPrivadas() {
  const { user } = useContext(UserContext)!;
  return (
    <>
      <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen
        options={{ drawerItemStyle: {} }}
        name="Pesquisa"
        component={Produtos}
      />
      <Drawer.Screen name="Perfil" component={Profile} />
      <Drawer.Screen name="Produto" component={PaginaProduto} />
      <Drawer.Screen name="Registro" component={Registro} />
      <Drawer.Screen name="Carrinho" component={Carrinho} />
      <Drawer.Screen
        options={{ headerShown: false, swipeEnabled: true }}
        name="Sair"
        component={Login}
      />
    </>
  );
} export default RotasPrivadas
