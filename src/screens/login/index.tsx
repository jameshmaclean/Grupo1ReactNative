import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, Alert } from "react-native";
import {
  MainView,
  Texto,
  Input,
  Viewtv,
  TextReg,
  TextReg2,
  Imag,
  Butao,
  TextLogarrb,
} from "./styles";
import { FontAwesome5, Zocial, Entypo } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/authContext";
import { useForm, FieldValues } from "react-hook-form";
import { InputControl } from "../../components/InputControl";

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

interface IFormInput {
  [name: string]: any;
}

const Login = () => {
  const [iconNome, setIconNome] = useState("eye-with-line");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { handleSubmit, control } = useForm<FieldValues>();
  const { navigate } = useNavigation<ScreenNavigationProp>();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const changeIcon = () => {
    if (iconNome === "eye-with-line") {
      setIconNome("eye");
      togglePasswordVisibility();
    } else {
      setIconNome("eye-with-line");
      togglePasswordVisibility();
    }
  };

  const handleLogin = (form: IFormInput) => {
    const data = {
      username: form.username,
      password: form.password,
    };
    try {
      setLoading(true);
      login(data);
      navigate("Menu")
      setLoading(false);
    } catch (error) {
      Alert.alert("Erro na autenticação form");
    }
  };

  const handleRagistro = () => {
    navigate("Registro");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <MainView>
        <Imag source={require("../../assets/images/logo.png")} />
        <Texto>Bem-vindo(a) de volta!</Texto>

        <Viewtv>
          <InputControl
            placeholder="E-mail"
            name="username"
            control={control}
          />
          {/* <Input
            value={email}
            onChangeText={setEmail}
            placeholder="E-mail"
            placeholderTextColor={"#705A54"}
          /> */}
          <Zocial
            name="email"
            size={24}
            color="#704032"
            position="absolute"
            top={24}
            left={25}
          />
        </Viewtv>

        <Viewtv>
          <InputControl placeholder="Senha" name="password" control={control} secureTextEntry={!passwordVisible} />
          {/* value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
            placeholder="Senha"
            placeholderTextColor={"#705A54"}
          /> */}
          <FontAwesome5
            color="#704032"
            position="absolute"
            top={24}
            left={25}
            name="lock"
            size={24}
          />
          <TouchableOpacity onPress={changeIcon}>
            <Entypo
              color="#704032"
              position="absolute"
              bottom={26}
              right={25}
              name={iconNome}
              size={24}
            />
          </TouchableOpacity>
        </Viewtv>

        <TouchableOpacity>
          <TextReg onPress={handleRagistro}>Não possui conta? Registre-se!</TextReg>
        </TouchableOpacity>

        <Butao onPress={handleSubmit(handleLogin)} disabled={loading}>
          <TextLogarrb>Entrar</TextLogarrb>
        </Butao>

        <StatusBar style="auto" />
      </MainView>
    </>
  );
};
export default Login;
