import { SafeAreaView, TextInput, View, Dimensions, Text, Image } from "react-native";
import { CarrosselContainer, CarrouselImg, InputSearch, MainContainer, SearchBox } from "./style";
import { AntDesign } from '@expo/vector-icons'; 
import { useState, useRef } from "react";
import Carousel from 'react-native-snap-carousel';

const imgs = ['../../assets/images/promo1.webp','../../assets/images/promo2.jpg','../../assets/images/promo3.jpg']

const Menu = () => {
  const width = Dimensions.get('window').width
  const isCarousel = useRef(null)

  return (
      <MainContainer >
        <SearchBox>
          <AntDesign name="search1" size={24} color="#705A54"/>
          {/* <SearchBar placeholder="Busca" */}
          <InputSearch placeholder="Busca" blurOnSubmit={true}/>
        </SearchBox>
        <CarrosselContainer>
          
        <Carousel
        layout="stack"
        layoutCardOffset={9}
        ref={isCarousel}
        data={imgs}
        renderItem={(item)=> <CarrouselImg source={require('../../assets/images/promo2.jpg')} />}
        sliderWidth={width}
        itemWidth={100}
        inactiveSlideShift={1}
        useScrollView={true}
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