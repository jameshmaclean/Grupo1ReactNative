import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, Alert } from "react-native";
import { MainView,
  Texto,
  Input,
  Viewtv,
  TextReg,
  TextReg2,
  Imag,
  Butao,
  TextLogarrb
   } from "./styles";
import { FontAwesome5, Zocial, Entypo } from '@expo/vector-icons'; 
import React, { useState } from 'react';

export const Login = () => {

  const [iconNome, setIconNome] = useState('eye-with-line');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(false);

  const changeIcon = () => {
    if (iconNome === 'eye-with-line') {
      setIconNome('eye');
      togglePasswordVisibility();
    } else {
      setIconNome('eye-with-line');
      togglePasswordVisibility();
    }
  };


  const handleLogin = () => {
    if (email === 'danielreidelas@gmail.com' && password === '123') {
      Alert.alert('Login bem-sucedido');
    } else {
      Alert.alert('Credenciais inválidas');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <MainView>
        <Imag
          source={require("../../assets/images/logo.png")}
        />
        <Texto>Bem-vinde de volta!</Texto>

        <Viewtv>
          <Input value={email} onChangeText={setEmail} placeholder="E-mail" placeholderTextColor={'#705A54'}/>
          <Zocial name="email" size={24} color='#704032'position='absolute' top={24} left={25} />
        </Viewtv>

        <Viewtv>
          <Input value={password} onChangeText={setPassword} secureTextEntry={!passwordVisible} placeholder="Senha" placeholderTextColor={'#705A54'}/>
          <FontAwesome5 color='#704032'position='absolute' top={24} left={25} name="lock" size={24} />
          <TouchableOpacity onPress={changeIcon}>
            <Entypo color='#704032' position='absolute' bottom={26} right={25} name={iconNome} size={24} />
          </TouchableOpacity>
        </Viewtv>

        <TouchableOpacity>
          <TextReg2>Esqueceu a senha?</TextReg2>
        </TouchableOpacity>

        <TouchableOpacity>
          <TextReg>Não possui conta? Registre-se!</TextReg>
        </TouchableOpacity>

        <Butao onPress={handleLogin}>
          <TextLogarrb>Entrar</TextLogarrb>
        </Butao>

        

        <StatusBar style="auto" />
      </MainView>
    </>
  );
};
