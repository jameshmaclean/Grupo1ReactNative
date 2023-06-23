import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useContext, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Carrinho from "./src/screens/Carrinho";
import Profile from "./src/screens/Perfil";
import Produtos from "./src/screens/Produtos";
import Registro from "./src/screens/Registro";
import { Login } from "./src/screens/login";
import { NavigationContainer } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Menu from "./src/screens/Menu";
import PaginaProduto from "./src/screens/PaginaProduto";
import Header from "./src/components/Header";
import { ContainerFoto, ImagemDrawer, TextoDrawer } from "./styles";
import { UserContext, UserContextProvider } from "./src/contexts/userContext";
import AnimatedLottieView from "lottie-react-native";
const Drawer = createDrawerNavigator();

function MyStack() {
  const { user } = useContext(UserContext)!;
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <ContainerFoto>
              <ImagemDrawer source={{ uri: user!.url }} resizeMode="cover" />
              <TextoDrawer>{user!.nome}</TextoDrawer>
            </ContainerFoto>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        );
      }}
      screenOptions={{
        header: Header,
        headerShown: true,
        drawerStyle: { backgroundColor: "#EDEDED", height: "100%" },
        drawerLabelStyle: { fontWeight: "800", fontSize: 20, color: "#705A54" },
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
      <Drawer.Screen name="Produto" component={PaginaProduto} />
      <Drawer.Screen
        options={{ headerShown: false, swipeEnabled: true }}
        name="Login"
        component={Login}
      />
      <Drawer.Screen name="Registro" component={Registro} />
      <Drawer.Screen name="Carrinho" component={Carrinho} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <View style={{flex: 1}}>
      {loaded === true ? (
        <View style={{ flex: 1 }}>
          <NavigationContainer>
            <UserContextProvider>
              <MyStack />
            </UserContextProvider>
          </NavigationContainer>
          <StatusBar style="auto" />
        </View>
      ) : (
        <View
          style={{
            width:"100%",
            height:"100%",
            backgroundColor: "#DDC5BE",
            justifyContent:"center",
            alignItems: "center"
          }}
        >
          <AnimatedLottieView
            source={require("./src/assets/splash/splash.json")}
            autoPlay
            loop={false}
            style={{width:297, height:297}}
            resizeMode="cover"
            onAnimationFinish={() => {
              setLoaded(true);
              console.log("animation finished");
            }}
          />        
          </View>
      )}
    </View>
  );
}
