import "react-native-gesture-handler";
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
import ThemeButton from "../components/ThemeButton";
import { CurTheme } from "../contexts/themeContext";

const Drawer = createDrawerNavigator();

function RotasPublicas() {
  const { logout, user } = useAuth();  
  const { light, setLight} = useContext(CurTheme)

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => {
          return (
            <DrawerContentScrollView {...props}>
              <ContainerFoto>
                <TextoDrawer style={{color: light ? "#705A54" : "#C29C91"}}>Seja bem vindo :)</TextoDrawer>
              </ContainerFoto>
              <DrawerItemList {...props} />
              <ThemeButton  change={() => setLight(!light)} light={light} log={false}/>
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
            color: light ? "#705A54" : "#C29C91",
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
          options={{ headerShown: false, swipeEnabled: true}}
          name="Entrar"
          component={Login}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default RotasPublicas;
