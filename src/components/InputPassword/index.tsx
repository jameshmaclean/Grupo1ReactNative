import React from "react";
import {Input} from './styles';
import {TextInputProps} from 'react-native'

export const InputPassword: React.FC<TextInputProps> = ({...props})=>{
    return(
        <Input placeholderTextColor={'gray'}{...props}/>
    )
}