import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Carrinho from "./src/screens/Carrinho";
import Profile from "./src/screens/Perfil";
import Produtos from "./src/screens/Produtos";
import Registro from "./src/screens/Registro";
import { Login } from "./src/screens/login";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
function MyStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: "cyan", height: "100%" },
      }}
    >
      <Drawer.Screen
        options={{ drawerActiveBackgroundColor: "#E5C4D4" }}
        name="Home"
        component={Produtos}
      />
      <Drawer.Screen name="Perfil" component={Profile} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Registro" component={Registro} />
      <Drawer.Screen name="Carrinho" component={Carrinho} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>

      {/* <Carrinho/> */}
      {/* <Produtos /> */}
      {/* <Registro/> */}
      {/* <Login/> */}
      {/* <PaginaProduto/> */}

      <StatusBar style="auto" />
    </View>
  );
}
