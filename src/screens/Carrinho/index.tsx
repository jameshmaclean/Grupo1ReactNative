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
import { useCart } from "../../contexts/cartContext";

const Carrinho = ({ navigation }) => {
  const { cart, setCart } = useCart();
  
  const handleDiminuir = (id: number) => {
    setProdutos((prevProdutos) => {
      return prevProdutos.map((produto) => {
        if (produto.produtoId === id) {
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
        if (produto.produtoId === id) {
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
    console.log(id)
    setCart(produtos.filter((produto) => produto.produtoId !== id));
  };

  let total: number = 0;

  const [produtos, setProdutos] = useState([{}]);
  
let quantidadeTotal = 0;
let valorTotal = 0;

produtos.forEach((produto) => {
  quantidadeTotal += produto.quantidade;
  valorTotal += produto.quantidade * produto.valorUnitario;
});

  React.useEffect(() => {
    setProdutos(cart);
  }, [cart]);

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
        {produtos.map((item: any) => {
          total += item.quantidade * item.valorUnitario;
          return (
            <CardCarrinho key={item.produtoId}>
              <ImagemCarrinho
                source={{ uri: item.url }}
                resizeMode="contain"
              />
              <CardText >
                <CartTitle>{item.nome}</CartTitle>
                <CartQt >
                  Quantidade:{" "}
                  <CartNum>
                    <Feather
                      name="plus"
                      size={13}
                      color="black"
                      style={{ textAlignVertical: "center" }}
                      onPress={() => handleAumentar(item.produtoId)}
                    />
                    {item.quantidade}
                    <Feather
                      name="minus"
                      size={13}
                      color="black"
                      onPress={() => handleDiminuir(item.produtoId)}
                      disabled={item.quantidade <= 0 ? true : false}
                    />
                  </CartNum>
                </CartQt>
                <CartQt>
                  Total:{" "}
                  <CartNum>R$ {item.quantidade * item.valorUnitario}</CartNum>
                </CartQt>

                <Remove onPress={() => handleRemover(item.produtoId)}>
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
