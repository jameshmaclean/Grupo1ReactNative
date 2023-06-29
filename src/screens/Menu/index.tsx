import {  View, Dimensions, ScrollView } from "react-native";
import { CarrosselContainer, CarrouselImg, InputSearch, MainContainer, SearchBox, TextRecomendado } from "./style";
import { AntDesign, Entypo } from '@expo/vector-icons'; 
import { useRef } from "react";
import { FlatList } from "react-native";
import Carousel from 'react-native-snap-carousel';
import aaa from "../../assets/data/aaa";
import {
  ProdutoCard,
  AddToCart,
  ButtonText,
  ProductImage,
  ProductInfo,
  TextInfo,
} from "../Produtos/styles";
import { change, toggleTheme } from '../../themes/global';

const imgs = [
  require('../../assets/images/promo1.webp'),
  require('../../assets/images/promo2.jpg'),
  require('../../assets/images/promo3.jpg')
];

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

const Menu = ({navigation} : {navigation : any}) => {
  const width:number = Dimensions.get('window').width
  const isCarousel = useRef(null)

  const imagensCarrossel= ({ item })=>{
    return(
      <View style={{alignSelf:"center"}}>
        <CarrouselImg source={item} resizeMode="contain" />
      </View>
    )
  }

  return (
    <ScrollView>
      <MainContainer >
        <SearchBox>
          <AntDesign name="search1" size={24} color="#705A54"/>
          {/* <SearchBar placeholder="Busca" */}
          <InputSearch placeholder="Busca" blurOnSubmit={true} onSubmitEditing={(e) => navigation.navigate('Pesquisa', {menuBusca : e.nativeEvent.text})}/>
        </SearchBox>
        <CarrosselContainer>
          <Entypo name="chevron-thin-left" size={45} color="#705A54" onPress={() => isCarousel.current.snapToPrev()} style={{position: "absolute", left: '3%', zIndex: 2}}/>
          <Entypo name="chevron-thin-right" size={45} color="#705A54" onPress={() => isCarousel.current.snapToNext()} style={{position: "absolute", right: '3%', zIndex: 2}}/>
        <Carousel
        autoplay
        layoutCardOffset={50}
        autoplayInterval={3000} // Defina o intervalo de tempo entre os slides em milissegundos
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
          scrollEnabled={false}
        />

      </MainContainer>
      </ScrollView>
  );
};

export default Menu;