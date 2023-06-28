import React, {useState} from 'react'
import { ScrollView, View, Image, Button } from 'react-native';
import {Container, Title, FormGroup, Input, ButtonText, Button1} from './styles'
import axios from 'axios';
import { api } from '../../services/api';
import * as ImagePicker from 'expo-image-picker';
import FormData from 'form-data';

const Registro = () => {

  type userType= {  
    email : string
    nome : string
    nomeUser : string
    telefone : string
    cpf : string
    compra : boolean
    venda : boolean
    data : string
    cep : string
    estado: string
    cidade: string
    bairro: string
    rua: string 
    numero : string
    complemento : string
    password : string
    roles: [string]
    url:string
}


const [fotoUser, setFotoUser] = useState('')

const [user, setUser] = useState<userType>({
  email: '',
  nome: '',
  nomeUser: '',
  telefone: '24998399530',
  cpf: '',
  compra: false,
  venda: false,
  cep: '',
  estado:'',
  cidade:'',
  bairro:'',
  rua: '',
  data: '2023-06-28',
  numero: '',
  complemento: '',
  password: '',
  roles: ['admin'],
  url: ''
});

const [selectedImage, setSelectedImage] = useState(null);

const formData = new FormData();

const openImagePicker = async () => {
  const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert('A permissão para acessar a biblioteca de mídia é necessária!');
    return;
  }

  const pickerResult = await ImagePicker.launchImageLibraryAsync();

  

  if (!pickerResult.canceled) {
    
    formData.append('foto', {
      uri: pickerResult.assets[0].uri,
      type: 'image/jpeg',
      name: 'photo.jpg',
    }) 
    ;

    setFotoUser(pickerResult.assets[0].uri);
  }
};

const handleRegistro = async() => {
  
  formData.append('usuarioDTO', JSON.stringify(user))
  formData.append('foto', { uri: fotoUser, type: 'application/octet-stream' });
  ;
  console.log("formdata:", formData)

  const response = await api.post(`usuario/inserir?email=${encodeURIComponent(user.email)}`, formData, {headers:{'Content-Type': 'multipart/form-data'}} )
    console.log("response",response)
    return response

    // .then(response => {
    //   console.log(response.data);
      
    // })
    // .catch(error => {
    //   console.error(error);
      
    // });
};

  return (
    <ScrollView>
      <Container>
        <Title>Preencha os campos e clique em registrar:</Title>

        {fotoUser && (
        <Image source={{ uri: fotoUser }} style={{ width: 200, height: 200 }} />
      )}
      <Button title="Escolher foto" onPress={openImagePicker} />

        <FormGroup>
          <Input placeholderTextColor="#705A54" placeholder="Nome" onChangeText={(text) => setUser({ ...user, nome: text })}/>
        </FormGroup>

        <FormGroup>
          <Input placeholderTextColor="#705A54" placeholder="Usuário"  onChangeText={(text) => setUser({ ...user, nomeUser: text })} />
        </FormGroup>

        <FormGroup>
          <Input placeholderTextColor="#705A54" placeholder="E-mail" onChangeText={(text) => setUser({ ...user, email: text })}/>
        </FormGroup>

        <FormGroup>
          <Input placeholderTextColor="#705A54" secureTextEntry placeholder="Senha" onChangeText={(text) => setUser({ ...user, password: text })}/>
        </FormGroup>

        <FormGroup>
          <Input placeholderTextColor="#705A54" secureTextEntry placeholder="Repita a senha" />
        </FormGroup>

        <FormGroup>
          <Input placeholderTextColor="#705A54" placeholder="CPF"  onChangeText={(text) => setUser({ ...user, cpf: text })} />
        </FormGroup>

        <Title>Endereço:</Title>

        <FormGroup>
          <Input placeholderTextColor="#705A54" placeholder="CEP" onChangeText={(text) => setUser({ ...user, cep: text })}/>
        </FormGroup>

        <FormGroup>
          <Input placeholderTextColor="#705A54" placeholder="Estado" onChangeText={(text) => setUser({ ...user, estado: text })} />
        </FormGroup>

        <FormGroup>
          <Input placeholderTextColor="#705A54" placeholder="Cidade" onChangeText={(text) => setUser({ ...user, cidade: text })}/>
        </FormGroup>

        <FormGroup>
          <Input placeholderTextColor="#705A54" placeholder="Bairro" onChangeText={(text) => setUser({ ...user, bairro: text })}/>
        </FormGroup>

        <FormGroup>
          <Input placeholderTextColor="#705A54" placeholder="Rua" onChangeText={(text) => setUser({ ...user, rua: text })}/>
        </FormGroup>

        <FormGroup>
          <Input placeholderTextColor="#705A54" placeholder="Numero" onChangeText={(text) => setUser({ ...user, numero: text })}/>
        </FormGroup>

        <FormGroup>
          <Input placeholderTextColor="#705A54" placeholder="Complemento" onChangeText={(text) => setUser({ ...user, complemento: text })}/>
        </FormGroup>

        <Button1  onPress={handleRegistro} >
          <ButtonText>Registrar</ButtonText>
        </Button1>
      </Container>
      <View style={{height: 40}}/>
    </ScrollView>
  )
}

export default Registro

