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
import {useContext} from 'react'
import { ContainerFoto, ImagemDrawer, TextoDrawer } from "./styles";
import Header from "../components/Header";
import { useAuth } from "../contexts/authContext";
import { CurTheme } from "../contexts/themeContext";
import ThemeButton from "../components/ThemeButton";
import Categoria from "../screens/Categoria";

const Drawer = createDrawerNavigator();

function RotasPrivadas() {
  const { logout, user, perfil } = useAuth();
  const { light, setLight } = useContext<any>(CurTheme)

  {console.log('USER ROTAS', user)}
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => {
          return (
            <DrawerContentScrollView {...props}>
              <ContainerFoto>
                <ImagemDrawer source={{ uri: perfil }} resizeMode="cover" />
                <TextoDrawer style={{color: light ? "#705A54" : "#C29C91"}}>{user.nome}</TextoDrawer>
              </ContainerFoto>
              <DrawerItemList {...props} />
              <DrawerItem label={'Sair'} onPress={()=> logout()} labelStyle={{fontWeight: "800", fontSize: 20, color: light ? "#705A54" : "#C29C91"}}/>
              <ThemeButton  change={() => setLight(!light)} light={light} log={true}/>
            </DrawerContentScrollView>
          );
        }}
        screenOptions={{
          header: Header,
          headerShown: true,
          drawerStyle: { backgroundColor: light ? "#EDEDED" : "#705A54", height: "100%" },
          drawerLabelStyle: {
            fontWeight: "800",
            fontSize: 20,
            color: light ? "#705A54" : "#C29C91"
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
        <Drawer.Screen name="Registro" component={Registro} />
        <Drawer.Screen name="Carrinho" component={Carrinho} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default RotasPrivadas;
