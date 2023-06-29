import "react-native-gesture-handler";
import Carrinho from "../screens/Carrinho";
import Profile from "../screens/Perfil";
import Produtos from "../screens/Produtos";
import Registro from "../screens/Registro";
import { DrawerItem, createDrawerNavigator } from "@react-navigation/drawer";
import Menu from "../screens//Menu";
import PaginaProduto from "../screens/PaginaProduto";
import { NavigationContainer } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { ContainerFoto, ImagemDrawer, TextoDrawer } from "./styles";
import Header from "../components/Header";
import { useAuth } from "../contexts/authContext";
import Categoria from "../screens/Categoria";

const Drawer = createDrawerNavigator();

function RotasPrivadas() {
  const { logout, user, perfil } = useAuth();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => {
          return (
            <DrawerContentScrollView {...props}>
              <ContainerFoto>
                {user ? (
                  <ImagemDrawer source={{ uri: perfil }} resizeMode="cover" />
                ) : null}
                <TextoDrawer>{user.nome}</TextoDrawer>
              </ContainerFoto>
              <DrawerItemList {...props} />
              <DrawerItem
                label={"Sair"}
                onPress={() => logout()}
                labelStyle={{
                  fontWeight: "800",
                  fontSize: 20,
                  color: "#705A54",
                }}
              />
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
        <Drawer.Screen name="Perfil" component={Profile} />
        <Drawer.Screen name="Categorias" component={Categoria} />

        <Drawer.Screen name="Produto" component={PaginaProduto} />
        <Drawer.Screen name="Registro" component={Registro} />
        <Drawer.Screen name="Carrinho" component={Carrinho} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default RotasPrivadas;
