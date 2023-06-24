import {  View, Dimensions } from "react-native";
import { CarrosselContainer, CarrouselImg, InputSearch, MainContainer, SearchBox } from "./style";
import { AntDesign } from '@expo/vector-icons'; 
import {  useRef } from "react";
import Carousel from 'react-native-snap-carousel';

const imgs = [
  require('../../assets/images/promo1.webp'),
  require('../../assets/images/promo2.jpg'),
  require('../../assets/images/promo3.jpg')
];
const Menu = () => {
  const width:number = Dimensions.get('window').width
  const isCarousel = useRef(null)

  const imagensCarrossel= ({ item })=>{
    return(
      <View style={{alignSelf:"center"}}>
      <CarrouselImg source={item}resizeMode="cover" />
    </View>
    )
  }

  return (
      <MainContainer >
        <SearchBox>
          <AntDesign name="search1" size={24} color="#705A54"/>
          {/* <SearchBar placeholder="Busca" */}
          <InputSearch placeholder="Busca" blurOnSubmit={true}/>
        </SearchBox>
        <CarrosselContainer>
          
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
        itemWidth={100}
      />

          {/* <Carousel layout={'default'} layoutCardOffset={9} sliderWidth={width} itemWidth={100} data={imgs} renderItem={({item, index})=> <CarrouselImg source={require('../../assets/images/promo3.jpg')}/> } onSnapToItem={(item) => console.log('Item:', item)} scrollEnabled={true}/> */}
          {/* <CarrouselImg source={require('../../assets/images/promo1.webp')}/>
          <CarrouselImg source={require('../../assets/images/promo2.jpg')}/>
          <CarrouselImg source={require('../../assets/images/promo3.jpg')}/> */}
        </CarrosselContainer>
      </MainContainer>
  );
};

export default Menu;