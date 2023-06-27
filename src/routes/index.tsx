import "react-native-gesture-handler";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Header from "../components/Header";
import { ContainerFoto, ImagemDrawer, TextoDrawer } from "./styles";
import RotasPrivadas from "./RotasPrivadas";
import RotasPublicas from "./RotasPublicas";
import { useAuth } from "../contexts/authContext";
const Drawer = createDrawerNavigator();
const Rotas = () => {
  const { id } = useAuth();
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
      {id ? <RotasPrivadas /> : <RotasPublicas />}
    </Drawer.Navigator>
  );
};
export default Rotas;
