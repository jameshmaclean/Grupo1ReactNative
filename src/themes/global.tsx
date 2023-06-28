import React from 'react-native'
import { useState } from "react";

const light = ['#705454', '#C29C91', '#704032', '#000000', '#ffffff', '#ededed', '#d9d9d9']
const dark = ['#705454', '#C29C91', '#704032', '#000000', '#ffffff', '#705A54', '#C29C91']

let ltheme = {
  primary: "#705a54", // #705A54
  primaryVariantOne: "#C29C91", // #C29C91
  primaryVariantTwo: "#d6b9b0",
  
  secondary: "#704032", // #704032
  secondaryVariant: "#DDc5be",

  shadow: "#000000", // #000000
  background: "#ffffff", // #ffffff
  surface: "#ededed", // #705A54
  surfaceVariant: "#d9d9d9", // #C29C91

  placeholder: "#808080", 
  input: "#000000",

};

let dtheme = {
  primary: "#705a54", // #705A54
  primaryVariantOne: "#c29c91", // #C29C91
  primariaVariantTwo: "#d6b9b0",
  
  secondary: "#704032", // #704032
  secondaryVariant: "#DDc5be",

  shadow: "#000000", // #000000
  background: "#ffffff", // #ffffff
  surface: "#705A54", // #705A54
  surfaceVariant: "#C29C91", // #C29C91

  placeholder: "#808080", 
  input: "#000000",

};

export default ltheme;

