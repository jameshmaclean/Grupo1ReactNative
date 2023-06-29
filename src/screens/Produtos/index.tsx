import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import {
  Container,
  HeaderText,
  ButtonMenu,
  ButtonBasket,
  SearchBar,
  ContainerProdutos,
  ProdutoCard,
  InputButton,
  PlaceholderText,
  WrittenText,
  AddToCart,
  ButtonText,
  UserInput,
  ViewInput,
  ProductImage,
  ProductInfo,
  TextInfo,
  Filter,
  FilterText,
} from "./styles";
import { SearchBox, InputSearch } from "../Menu/style";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import aaa from "../../assets/data/aaa";
import { ProductById, listProduct } from "../../services/produto";
import { useCart } from "../../contexts/cartContext";

type Types = {
  value: string;
  placeholder: string;
  onChangeText?: (value: string) => void;
  overlay?: (value: boolean) => void;
};

type ItemProps = {
  name: string;
  image: string;
  price: string;
  id: number;
};

const Item = ({ name, image, price, id }: ItemProps) => {
  const { cart, setCart } = useCart();
  console.log(id);

  const handleCart = async (id) => {
    console.log("Entrei");
    const response = await ProductById(id);
    const novoItem = await response.data;
    const produtoComQuantidade = { ...novoItem, quantidade: 1 };
    setCart((prevCart) => [...prevCart, produtoComQuantidade]);
    console.log("SOU U CARRINHO", cart);
  };

  return (
    <ProdutoCard>
      <ProductImage source={{ uri: image }} />
      <ProductInfo>
        <TextInfo numberOfLines={1}>{name}</TextInfo>
        <TextInfo>R$ {price}</TextInfo>
      </ProductInfo>
      <AddToCart onPress={() => handleCart(id)}>
        <ButtonText>Comprar</ButtonText>
      </AddToCart>
    </ProdutoCard>
  );
};

const Produtos = ({ route, navigation }: { route: any; navigation: any }) => {
  const { menuBusca } = route.params || "";
  const [busca, setBusca] = useState("");
  const [overlay, setOverlay] = useState(false);
  const [produtosOrg, setProdutosOrg] = useState([]);

  const [resultadosBusca, setResultadosBusca] = useState([]);

  useEffect(() => {
    listaAPI(), buscarProdutos(menuBusca || "");
  }, []);

  const buscarProdutos = (termoBusca: string) => {
    if (termoBusca.trim() === "") {
      setResultadosBusca(produtosOrg);
    } else {
      const resultados = resultadosBusca.filter((item) =>
        item.nome.toLowerCase().includes(termoBusca.toLowerCase())
      );
      setResultadosBusca(resultados);
    }
  };

  const listaAPI = async () => {
    const { data }: { data: any } = await listProduct();
    console.log("nossa lista: ", resultadosBusca);
    setResultadosBusca(data);
    setProdutosOrg(data);
  };

  return (
    <>
      <Container>
        <SearchBox style={{ marginTop: 30 }}>
          <AntDesign name="search1" size={24} color="#705A54" />
          {/* <SearchBar placeholder="Busca" */}
          <TextInput
            style={{ marginLeft: 10, width: "90%" }}
            placeholder="Busca"
            blurOnSubmit={true}
            onChangeText={buscarProdutos}
            defaultValue={menuBusca}
          />
          {/* <InputSearch placeholder="Busca" blurOnSubmit={true}/> */}
        </SearchBox>

        <Filter>
          <FilterText>
            Filtro
            <FontAwesome name="filter" size={24} color="#705a54" />
          </FilterText>
        </Filter>

        {/* <ContainerProdutos> */}
        <FlatList
          data={resultadosBusca.length > 0 ? resultadosBusca : []}
          renderItem={({ item }) => (
            <Item
              name={item.nome}
              image={item.url}
              price={item.valorUnitario}
              id={item.produtoId}
            />
          )}
          keyExtractor={(item) => item.produtoId.toString()}
          numColumns={2}
          columnWrapperStyle={{ gap: 10, justifyContent: "center" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: "100%",
            paddingLeft: 15,
            paddingRight: 15,
          }}
        />
        {/* </ContainerProdutos> */}
      </Container>
    </>
  );
};

export default Produtos;
