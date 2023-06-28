import React from 'react'
import { ScrollView, View } from 'react-native';
import {Container, Title, FormGroup, Input, ButtonText, Button1} from './styles'

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
    numero : string
    complemento : string
    password : string
}

  return (
    <ScrollView>
      <Container>
        <Title>Preencha os campos e clique em registrar:</Title>

        <FormGroup>
          <Input placeholderTextColor="#705A54" placeholder="Nome" />
        </FormGroup>

        <FormGroup>
          <Input placeholderTextColor="#705A54" placeholder="Usuário" />
        </FormGroup>

        <FormGroup>
          <Input placeholderTextColor="#705A54" placeholder="E-mail" />
        </FormGroup>

        <FormGroup>
          <Input placeholderTextColor="#705A54" secureTextEntry placeholder="Senha" />
        </FormGroup>

        <FormGroup>
          <Input placeholderTextColor="#705A54" secureTextEntry placeholder="Repita a senha" />
        </FormGroup>

        <FormGroup>
          <Input placeholderTextColor="#705A54" placeholder="CPF" />
        </FormGroup>

        <Title>Endereço:</Title>

        <FormGroup>
          <Input placeholderTextColor="#705A54" placeholder="CEP" />
        </FormGroup>

        <FormGroup>
          <Input placeholderTextColor="#705A54" placeholder="Estado" />
        </FormGroup>

        <FormGroup>
          <Input placeholderTextColor="#705A54" placeholder="Cidade" />
        </FormGroup>

        <FormGroup>
          <Input placeholderTextColor="#705A54" placeholder="Bairro" />
        </FormGroup>

        <FormGroup>
          <Input placeholderTextColor="#705A54" placeholder="Complemento" />
        </FormGroup>

        <Button1 onPress={() => console.log('Registrar')}>
          <ButtonText>Registrar</ButtonText>
        </Button1>
      </Container>
      <View style={{height: 40}}/>
    </ScrollView>
  )
}

export default Registro

