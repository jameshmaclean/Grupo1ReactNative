import { StatusBar } from "expo-status-bar";
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { styles } from "./style";
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import React, { useState } from 'react';

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(false);


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
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.img}
        />
        <Text style={styles.texto}>Bem-vinde de volta!</Text>

        <View style={styles.inputv}>
          <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder="E-mail" placeholderTextColor={'#705A54'}/>
          <Zocial style={styles.icon} name="email" size={24} />
        </View>

        <View style={styles.inputv}>
          <TextInput value={password} onChangeText={setPassword} secureTextEntry={!passwordVisible} style={styles.input} placeholder="Senha" placeholderTextColor={'#705A54'}/>
          <FontAwesome5 style={styles.icon} name="lock" size={24} />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons style={styles.icon2} name="eye" size={24} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.reg2}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.reg}>Não possui conta? Registre-se!</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogin} style={styles.buton}>
          <Text style={styles.logarb}>Entrar</Text>
        </TouchableOpacity>

        

        <StatusBar style="auto" />
      </View>
    </>
  );
};
