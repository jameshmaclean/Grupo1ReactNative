import React from "react-native";
import { Body, ButtonMenu, HeaderText, ButtonBasket } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { useAuth } from "../../contexts/authContext";

const Header = ({ navigation }: { navigation: any }) => {
  const { id } = useAuth();
  return (
    <Body>
      <ButtonMenu>
        <Entypo
          onPress={() => navigation.openDrawer()}
          name="menu"
          size={40}
          color="#705A54"
        />
      </ButtonMenu>
      <HeaderText>TSpresso</HeaderText>

      <ButtonBasket>
        <Entypo
          name="shopping-basket"
          size={35}
          color="#705A54"
          onPress={() => navigation.navigate("Carrinho")}
        />
      </ButtonBasket>
    </Body>
  );
};

export default Header;
