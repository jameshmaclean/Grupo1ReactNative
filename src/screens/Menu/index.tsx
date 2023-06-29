import React, { useState } from "react";
import {
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import {
  CarrosselContainer,
  CarrouselImg,
  InputSearch,
  MainContainer,
  SearchBox,
  TextRecomendado,
} from "./style";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useRef } from "react";
import { FlatList } from "react-native";
import Carousel from "react-native-snap-carousel";
import { shuffle } from "lodash";
import {
  ProdutoCard,
  AddToCart,
  ButtonText,
  ProductImage,
  ProductInfo,
  TextInfo,
} from "../Produtos/styles";
import { ProductById, listProduct } from "../../services/produto";
import PaginaProduto from "../PaginaProduto";

const imgs = [
  require("../../assets/images/promo1.webp"),
  require("../../assets/images/promo2.jpg"),
  require("../../assets/images/promo3.jpg"),
];

type ItemProps = {
  name: string;
  image: string;
  price: string;
  produto:any
};

const Item = ({ name, image, price, produto }: ItemProps) => {
  const [selectedProduct, setSelectedProduct] = React.useState<ItemProps | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleVerMais = () => {
    setSelectedProduct(produto);
    setModalVisible(true);
  };
  return (
    <ProdutoCard>
      <ProductImage source={{ uri: image }} />
      <ProductInfo>
        <TextInfo numberOfLines={1}>{name}</TextInfo>
        <TextInfo>R$ {price}</TextInfo>
      </ProductInfo>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <AddToCart onPress={() => setModalVisible(true)}>
          <ButtonText>Ver mais</ButtonText>
        </AddToCart>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <PaginaProduto/>
      </Modal>
    </ProdutoCard>
  );
};

const Menu = ({ navigation }: { navigation: any }) => {
  const width: number = Dimensions.get("window").width;
  const isCarousel = useRef(null);
  const [lista, setLista] = useState([]);
  const [listaExibicao, setListaExibicao] = useState([]);

  const listaAPI = async () => {
    const { data }: { data: [] } = await listProduct();
    setLista(data);
    setListaExibicao(data.slice(0, 6));
  };

  React.useEffect(() => {
    listaAPI();
  }, []);

  const imagensCarrossel = ({ item }) => {
    return (
      <View style={{ alignSelf: "center" }}>
        <CarrouselImg source={item} resizeMode="contain" />
      </View>
    );
  };

  return (
    <ScrollView>
      <MainContainer>
        <SearchBox>
          <AntDesign name="search1" size={24} color="#705A54" />
          <InputSearch
            placeholder="Busca"
            blurOnSubmit={true}
            onSubmitEditing={(e) =>
              navigation.navigate("Pesquisa", { menuBusca: e.nativeEvent.text })
            }
          />
        </SearchBox>
        <CarrosselContainer>
          <Entypo
            name="chevron-thin-left"
            size={45}
            color="#705A54"
            onPress={() => isCarousel.current.snapToPrev()}
            style={{ position: "absolute", left: "3%", zIndex: 2 }}
          />
          <Entypo
            name="chevron-thin-right"
            size={45}
            color="#705A54"
            onPress={() => isCarousel.current.snapToNext()}
            style={{ position: "absolute", right: "3%", zIndex: 2 }}
          />
          <Carousel
            autoplay
            layoutCardOffset={50}
            autoplayInterval={3000}
            vertical={false}
            layout="default"
            ref={isCarousel}
            data={imgs}
            renderItem={imagensCarrossel}
            sliderWidth={width}
            itemWidth={250}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
          />
        </CarrosselContainer>
        <TextRecomendado>Recomendações</TextRecomendado>
        <FlatList
          data={listaExibicao}
          renderItem={({ item }) => (
            <Item
              name={item.nome}
              image={item.url}
              price={item.valorUnitario}
              produto = {item}
            />
          )}
          keyExtractor={(item) => item.produtoId}
          numColumns={2}
          columnWrapperStyle={{ gap: 10, justifyContent: "center" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: "100%",
            paddingLeft: 15,
            paddingRight: 15,
          }}
          scrollEnabled={false}
        />
      </MainContainer>
    </ScrollView>
  );
};

export default Menu;
