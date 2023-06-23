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
  Header,
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
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import aaa from "../../assets/data/aaa";

type Types = {
  value: string;
  placeholder: string;
  onChangeText?: (value: string) => void;
  overlay?: (value: boolean) => void;
};

const Input = (props: Types, {navigation}) => {
  const [modalVisivel, setModalVisivel] = useState(false);

  function setVisibility(valueVisible: boolean) {
    setModalVisivel(valueVisible);
  }

  return (
    <InputButton activeOpacity={1} onPress={() => setVisibility(true)}>
      {props.value === "" ? (
        <PlaceholderText>{props.value || props.placeholder}</PlaceholderText>
      ) : (
        <WrittenText>{props.value || props.placeholder}</WrittenText>
      )}
      <Modal
        visible={modalVisivel}
        onRequestClose={() => setVisibility(false)}
        animationType="slide"
        transparent
      >
        <TouchableOpacity />

        <ViewInput>
          <UserInput {...props} />
        </ViewInput>
      </Modal>
    </InputButton>
  );
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

const Produtos = ({navigation}) => {
  const [busca, setBusca] = useState("");
  const [overlay, setOverlay] = useState(false);

  return (
    <>
      <Header>
        <ButtonMenu>
          <Entypo onPress={()=> navigation.openDrawer()} name="menu" size={40} color="#705A54" />
        </ButtonMenu>
        <HeaderText>TSpresso</HeaderText>
        <ButtonBasket>
          <Entypo name="shopping-basket" size={35} color="#705A54" onPress={() => navigation.navigate('Carrinho')}/>
        </ButtonBasket>
      </Header>

      <Container>
        <Input
          value=""
          placeholder="Barra de pesquisa teehee"
          onChangeText={setBusca}
        />

        <Filter>
          <FilterText>
            Filtro
            <FontAwesome name="filter" size={24} color="#705a54" />
          </FilterText>
        </Filter>

        {/* <ContainerProdutos> */}
        <FlatList
          data={aaa}
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
