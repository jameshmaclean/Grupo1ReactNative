import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Double } from "react-native/Libraries/Types/CodegenTypes";
import {
  CardCarrinho,
  CardText,
  ContainerCarrinho,
  ImagemCarrinho,
  CartTitle,
  CartQt,
  CartNum,
  Title,
  RowTitle,
  Remove,
  RemoveText,
  ContainerTotal,
  TextTotal,
  Finish,
  FinishText,
  TextTotalValor,
  ContainerText,
} from "./styles";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Carrinho = ({ navigation }) => {
  const handleDiminuir = (id: number) => {
    setProdutos((prevProdutos) => {
      return prevProdutos.map((produto) => {
        if (produto.id === id) {
          return {
            ...produto,
            quantidade: produto.quantidade - 1,
          };
        }
        return produto;
      });
    });
  };
  const handleAumentar = (id: number) => {
    setProdutos((prevProdutos) => {
      return prevProdutos.map((produto) => {
        if (produto.id === id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1,
          };
        }
        return produto;
      });
    });
  };

  const handleRemover = (id: number) => {
    setProdutos((prevProdutos) => {
      return prevProdutos.filter((produto) => produto.id !== id);
    });
  };

  let nome: string;
  let preco: Double;
  let total: number = 0;

  const [produtos, setProdutos] = useState([
    {
      id: 1,
      image:
        "https://raw.githubusercontent.com/jameshmaclean/Grupo1ReactNative/main/src/assets/images/pilao.png?token=GHSAT0AAAAAAB7VNHM725O22SC77J3DRKMOZEUIJDA",
      nome: "Café Pilão",
      preco: 40.0,
      quantidade: 0,
    },
    {
      id: 2,
      image:
        "https://raw.githubusercontent.com/jameshmaclean/Grupo1ReactNative/main/src/assets/images/pilao.png?token=GHSAT0AAAAAAB7VNHM725O22SC77J3DRKMOZEUIJDA",
      nome: "Café Pelé",
      preco: 50.0,
      quantidade: 0,
    },
    {
      id: 3,
      image:
        "https://raw.githubusercontent.com/jameshmaclean/Grupo1ReactNative/main/src/assets/images/pilao.png?token=GHSAT0AAAAAAB7VNHM725O22SC77J3DRKMOZEUIJDA",
      nome: "Café Pelé",
      preco: 10.0,
      quantidade: 0,
    },
    {
      id: 4,
      image:
        "https://raw.githubusercontent.com/jameshmaclean/Grupo1ReactNative/main/src/assets/images/pilao.png?token=GHSAT0AAAAAAB7VNHM725O22SC77J3DRKMOZEUIJDA",
      nome: "Café Pelé",
      preco: 10.0,
      quantidade: 0,
    },
    {
      id: 5,
      image:
        "https://raw.githubusercontent.com/jameshmaclean/Grupo1ReactNative/main/src/assets/images/pilao.png?token=GHSAT0AAAAAAB7VNHM725O22SC77J3DRKMOZEUIJDA",
      nome: "Café Pelé",
      preco: 10.0,
      quantidade: 0,
    },
    {
      id: 6,
      image:
        "https://raw.githubusercontent.com/jameshmaclean/Grupo1ReactNative/main/src/assets/images/pilao.png?token=GHSAT0AAAAAAB7VNHM725O22SC77J3DRKMOZEUIJDA",
      nome: "Café Pelé",
      preco: 10.0,
      quantidade: 0,
    },
  ]);

  return (
    <ContainerCarrinho>
      <RowTitle>
        <Entypo name="shopping-basket" size={50} color={"#705a54"} />
        {produtos.length !== 0 ? (
          <Title>Seu carrinho</Title>
        ) : (
          <Title>Carrinho Vazio</Title>
        )}
      </RowTitle>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={{ width: "100%", height: "75%" }}
      >
        {produtos.map((item) => {
          total += item.quantidade * item.preco;
          return (
            <CardCarrinho key={item.id}>
              <ImagemCarrinho
                key={item.id}
                source={{ uri: item.image }}
                resizeMode="contain"
              />
              <CardText>
                <CartTitle>{item.nome}</CartTitle>
                <CartQt>
                  Quantidade:{" "}
                  <CartNum>
                    <Feather
                      name="plus"
                      size={13}
                      color="black"
                      style={{ textAlignVertical: "center" }}
                      onPress={() => handleAumentar(item.id)}
                    />
                    {item.quantidade}
                    <Feather
                      name="minus"
                      size={13}
                      color="black"
                      onPress={() => handleDiminuir(item.id)}
                      disabled={item.quantidade <= 0 ? true : false}
                    />
                  </CartNum>
                </CartQt>
                <CartQt>
                  Total: <CartNum>R$ {item.quantidade * item.preco}</CartNum>
                </CartQt>

                <Remove onPress={() => handleRemover(item.id)}>
                  <RemoveText>Remover</RemoveText>
                </Remove>
              </CardText>
            </CardCarrinho>
          );
        })}
      </ScrollView>
      <ContainerTotal>
        <ContainerText>
          <TextTotal>
            Total: <TextTotalValor>R$ {total}</TextTotalValor>
          </TextTotal>
          <Finish>
            <FinishText>Finalizar</FinishText>
          </Finish>
        </ContainerText>
      </ContainerTotal>
    </ContainerCarrinho>
  );
};

export default Carrinho;
