import { SafeAreaView, TextInput, View, Dimensions, Text, Image } from "react-native";
import { CarrosselContainer, CarrouselImg, InputSearch, MainContainer, SearchBox } from "./style";
import { AntDesign } from '@expo/vector-icons'; 
import { useState } from "react";
import Carousel from 'react-native-snap-carousel';

const imgs = ['../../assets/images/promo1.webp','../../assets/images/promo2.jpg','../../assets/images/promo3.jpg']

const Menu = () => {
  const width = Dimensions.get('window').width;
  
  return (
      <MainContainer >
        <SearchBox>
          <AntDesign name="search1" size={24} color="#705A54"/>
          {/* <SearchBar placeholder="Busca" */}
          <InputSearch placeholder="Busca" blurOnSubmit={true}/>
        </SearchBox>
        <CarrosselContainer>
          
          <Carousel layout={'default'} layoutCardOffset={9} sliderWidth={100} itemWidth={100} data={imgs} renderItem={({item, index})=> <CarrouselImg source={require('../../assets/images/promo3.jpg')}/> } onSnapToItem={(item) => console.log('Item:', item)} scrollEnabled={true}/>
          {/* <CarrouselImg source={require('../../assets/images/promo1.webp')}/>
          <CarrouselImg source={require('../../assets/images/promo2.jpg')}/>
          <CarrouselImg source={require('../../assets/images/promo3.jpg')}/> */}
        </CarrosselContainer>
      </MainContainer>
  );
};

export default Menu;