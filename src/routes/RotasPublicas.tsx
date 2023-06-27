import "react-native-gesture-handler";
import { useContext } from "react";
import Carrinho from "../screens/Carrinho";
import Profile from "../screens/Perfil";
import Produtos from "../screens/Produtos";
import Registro from "../screens/Registro";
import Login from "../screens/login";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Menu from "../screens//Menu";
import PaginaProduto from "../screens/PaginaProduto";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { ContainerFoto, ImagemDrawer, TextoDrawer } from "./styles";
import Header from "../components/Header";
import { useAuth } from "../contexts/authContext";
const Drawer = createDrawerNavigator();

function RotasPublicas() {
  const { logout, user } = useAuth();  return (

    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => {
          return (
            <DrawerContentScrollView {...props}>
              <ContainerFoto>
                <ImagemDrawer source={{ uri: user.url }} resizeMode="cover" />
                <TextoDrawer>{user.nome}</TextoDrawer>
              </ContainerFoto>
              <DrawerItemList {...props} />
            </DrawerContentScrollView>
          );
        }}
        screenOptions={{
          header: Header,
          headerShown: true,
          drawerStyle: { backgroundColor: "#EDEDED", height: "100%" },
          drawerLabelStyle: {
            fontWeight: "800",
            fontSize: 20,
            color: "#705A54",
          },
          drawerActiveBackgroundColor: "#DDC5BE",
        }}
      >
        <Drawer.Screen name="Menu" component={Menu} />
        <Drawer.Screen
          options={{ drawerItemStyle: {} }}
          name="Pesquisa"
          component={Produtos}
        />
        <Drawer.Screen name="Produto" component={PaginaProduto} />
        <Drawer.Screen name="Registro" component={Registro} />

        <Drawer.Screen
          options={{ headerShown: false, swipeEnabled: true }}
          name="Entrar"
          component={Login}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default RotasPublicas;
