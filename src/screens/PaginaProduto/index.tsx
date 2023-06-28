import React from "react";
import {
  Preco,
  PageProduto,
  ContainerProduto,
  ImageProd,
  NomeProd,
  Estoque,
  Linha,
  Descricao,
  ContainerComprar,
  Botao,
  TextoBotao,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

const PaginaProduto = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  return (
    <Modal visible={true}>
      <PageProduto>
        <ContainerProduto>
          <Ionicons
            onPress={() => navigate("Menu")}
            name="arrow-back"
            size={50}
            color="#705A54"
            style={{
              alignSelf: "flex-start",
              position: "absolute",
              margin: 10,
            }}
          />
          <NomeProd>Café Pilão</NomeProd>
          <ImageProd
            source={require("../../assets/images/pilao.png")}
            resizeMode="contain"
          />
          <Preco>{"R$50,00"}</Preco>
          <Estoque>Estoque: {"3"}</Estoque>
          <Linha />
          <Descricao>
            Uma das marcas mais populares de café do brasil, com sabor
            tradicional e um preço que cabe no seu bolso.
          </Descricao>
        </ContainerProduto>
        <ContainerComprar>
          <Botao>
            <TextoBotao>Comprar</TextoBotao>
          </Botao>
        </ContainerComprar>
      </PageProduto>
    </Modal>
  );
};

export default PaginaProduto;
