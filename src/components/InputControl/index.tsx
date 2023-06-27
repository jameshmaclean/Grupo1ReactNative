import React from "react";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";
import {Container} from "./styles";
import {InputPassword} from "../InputPassword"

interface Props extends TextInputProps{
    control: Control;
    name:string
}

export const InputControl:React.FC<Props> = ({control, name, ...props})=>{
    return(
        <Container>
            <Controller control={control} render={({field: {onChange, value}})=>(
                <InputPassword onChangeText={onChange} value={value} {...props} />
            )}
            name={name}/>

        </Container>
    );
};