import React, { useState } from "react";
import { ScrollView, View, Image, Button } from "react-native";
import {
  Container,
  Title,
  FormGroup,
  Input,
  ButtonText,
  Button1,
} from "./styles";
import axios, { AxiosHeaders, formToJSON } from "axios";
import { api } from "../../services/api";
import * as ImagePicker from "expo-image-picker";
import FormData from "form-data";

const Registro = () => {
  type userType = {
    email: string;
    nome: string;
    nomeUser: string;
    telefone: string;
    cpf: string;
    compra: boolean;
    venda: boolean;
    data: string;
    cep: string;
    numero: string;
    complemento: string;
    password: string;
    roles: [string];
    url: string;
  };

  const [fotoUser, setFotoUser] = useState("");
  const [image, setImage] = useState("");
  const [user, setUser] = useState<userType>({
    email: "",
    nome: "",
    nomeUser: "",
    telefone: "21979814966",
    cpf: "",
    compra: true,
    venda: true,
    cep: "",
    data: "2023-06-28",
    numero: "",
    complemento: "",
    password: "",
    roles: ["admin"],
    url: "https://uploads.metropoles.com/wp-content/uploads/2023/04/26102552/Capa-Madonna-galpao-refrigerado-compressed-1024x683.jpg",
  });

  // const selectImage = async () => {
  //   try {
  //     const { status } =
  //       await ImagePicker.requestMediaLibraryPermissionsAsync();
  //     if (status !== "granted") {
  //       console.log("Permissão negada para acessar a biblioteca de mídia");
  //       return;
  //     }

  //     const result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       allowsEditing: false,
  //       aspect: [1, 1],
  //       quality: 1,
  //     });

  //     if (!result.canceled) {
  //       setImage(result.assets[0].uri as string);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handleRegistro = async () => {
  //   console.log("Cliquei no registro");
  //   if (image) {
  //     console.log("Entrei no form");
  //     const formData = new FormData();
  //     formData.append("usuarioDTO", JSON.stringify(user));
  //     formData.append("foto", image);

  //     const response = await api.post('usuario/inserir', formData, {params:{email: user.email}});
  //     console.log("Request:", {
  //       url: response.config.url,
  //       method: response.config.method,
  //       headers: response.config.headers,
  //       data: response.config.data,
  //     });
  //     console.log("response", response.data);

  //     console.error("Upload failed CAIU AAQUI:", Error);
  //     console.log(response);
  //     return response;
  //   }
  // };
  const handleRegistro = async () => {
    try {
      const response = await api.post('/usuario/cadastrar', user);
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <Container>
        <Title>Preencha os campos e clique em registrar:</Title>
        {/* {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        <Button title="Escolher foto" onPress={selectImage} /> */}

        <FormGroup>
          <Input
            placeholderTextColor="#705A54"
            placeholder="Nome"
            onChangeText={(text) => setUser({ ...user, nome: text })}
          />
        </FormGroup>

        <FormGroup>
          <Input
            placeholderTextColor="#705A54"
            placeholder="Usuário"
            onChangeText={(text) => setUser({ ...user, nomeUser: text })}
          />
        </FormGroup>

        <FormGroup>
          <Input
            placeholderTextColor="#705A54"
            placeholder="E-mail"
            onChangeText={(text) => setUser({ ...user, email: text })}
          />
        </FormGroup>

        <FormGroup>
          <Input
            placeholderTextColor="#705A54"
            secureTextEntry
            placeholder="Senha"
            onChangeText={(text) => setUser({ ...user, password: text })}
          />
        </FormGroup>

        <FormGroup>
          <Input
            placeholderTextColor="#705A54"
            secureTextEntry
            placeholder="Repita a senha"
          />
        </FormGroup>

        <FormGroup>
          <Input
            placeholderTextColor="#705A54"
            placeholder="CPF"
            onChangeText={(text) => setUser({ ...user, cpf: text })}
          />
        </FormGroup>

        <Title>Endereço:</Title>

        <FormGroup>
          <Input
            placeholderTextColor="#705A54"
            placeholder="CEP"
            onChangeText={(text) => setUser({ ...user, cep: text })}
          />
        </FormGroup>

        {/* <FormGroup>
          <Input
            placeholderTextColor="#705A54"
            placeholder="Estado"
            onChangeText={(text) => setUser({ ...user, estado: text })}
          />
        </FormGroup>

        <FormGroup>
          <Input
            placeholderTextColor="#705A54"
            placeholder="Cidade"
            onChangeText={(text) => setUser({ ...user, cidade: text })}
          />
        </FormGroup>

        <FormGroup>
          <Input
            placeholderTextColor="#705A54"
            placeholder="Bairro"
            onChangeText={(text) => setUser({ ...user, bairro: text })}
          />
        </FormGroup>

        <FormGroup>
          <Input
            placeholderTextColor="#705A54"
            placeholder="Rua"
            onChangeText={(text) => setUser({ ...user, rua: text })}
          />
        </FormGroup> */}

        <FormGroup>
          <Input
            placeholderTextColor="#705A54"
            placeholder="Numero"
            onChangeText={(text) => setUser({ ...user, numero: text })}
          />
        </FormGroup>

        <FormGroup>
          <Input
            placeholderTextColor="#705A54"
            placeholder="Complemento"
            onChangeText={(text) => setUser({ ...user, complemento: text })}
          />
        </FormGroup>

        <Button1 onPress={handleRegistro}>
          <ButtonText>Registrar</ButtonText>
        </Button1>
      </Container>
      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

export default Registro;
