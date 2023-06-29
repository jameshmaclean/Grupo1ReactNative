import React from 'react-native'
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';


const ThemeButton = (props : any) => {

    return(!props.light ? <Feather name="sun" size={40} color="#C29C91" style={{left: 50, marginTop: props.log ? 250 : 370}} onPress={props.change}/> : <Feather name="moon" size={40} color="#705a54" style={{left: 50, marginTop: props.log ? 250 : 370 }} onPress={props.change}/>)
}

export default ThemeButton;