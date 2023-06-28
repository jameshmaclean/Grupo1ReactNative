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
import{SearchBox, InputSearch} from '../Menu/style'
import { Entypo } from "@expo/vector-icons";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import aaa from "../../assets/data/aaa";


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
};

const Item = ({ name, image, price }: ItemProps) => (
  <ProdutoCard>
    <ProductImage source={{ uri: image }} />
    <ProductInfo>
      <TextInfo>{name}</TextInfo>
      <TextInfo>R$ {price}</TextInfo>
    </ProductInfo>
    <AddToCart>
      <ButtonText>Comprar</ButtonText>
    </AddToCart>
  </ProdutoCard>
);

const Produtos = ({ route , navigation} : {route : any, navigation : any}) => {
  const { menuBusca } = route.params
  const [busca, setBusca] = useState("");
  const [overlay, setOverlay] = useState(false);

  const [resultadosBusca, setResultadosBusca] = useState([]);

  useEffect(() => {buscarProdutos(menuBusca)},[])

  const buscarProdutos = (termoBusca : string) => {
    const resultados = aaa.filter((item) =>
      item.title.toLowerCase().includes(termoBusca.toLowerCase())
    );
    setResultadosBusca(resultados);
  };

  return (
    <>
      <Container>
        <SearchBox style={{marginTop: 30}}>
          <AntDesign name="search1" size={24} color="#705A54"/>
          {/* <SearchBar placeholder="Busca" */}
          <TextInput
            style={{marginLeft: 10, width: '90%'}}
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
          data={resultadosBusca.length > 0 ? resultadosBusca : aaa}
          renderItem={({ item }) => (
            <Item name={item.title} image={item.image} price={item.price} />
          )}
          keyExtractor={(item) => item.id}
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
