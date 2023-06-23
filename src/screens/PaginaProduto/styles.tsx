import styled from 'styled-components/native';

export const PageProduto = styled.View`
    flex: 1;
    align-items: center;
    background-color: #EDEDED;
    padding-top: 15px;
`

export const ContainerProduto = styled.View`
    height: 90%;
    width: 90%;
    background-color: #fff;
    border-radius: 20px;
    align-items: center;
`

export const NomeProd = styled.Text`
  font-size: 35px;
  color: #705A54;
  font-weight: 600;
  margin-top: 10px;
`

export const ImageProd = styled.Image`
    margin-top: 5%;
    height: 40%;
    width: 90%;
`

export const Preco = styled.Text`
  font-size: 36px;
  color: #705A54;
  font-weight: 600;
  margin-top: 10px;
  margin-left: 7%;
  align-self: flex-start;
`

export const Estoque = styled.Text`
  font-size: 24px;
  color: #705A54;
  font-weight: 600;
  margin-left: 7%;
  align-self: flex-start;
`
export const Linha = styled.View`
  height: 3px;
  width: 80%;
  border-radius: 50px;
  margin-top: 5%;
  background-color: #705A54;
`

export const Descricao = styled.Text`
  font-size: 20px;
  color: #705A54;
  font-weight: 600;
  width: 90%;
  margin-top: 5%;
  text-align: center;
`
export const ContainerComprar = styled.View`
  width: 100%;
  height: 15%;
  position: absolute;
  bottom: 0px;
  background-color: #EDEDED;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  justify-content: center;
  align-items: center;
`
export const Botao = styled.TouchableOpacity`
  height: 50%;
  width: 80%;
  background-color: #705A54;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  shadow-color: #000;
  elevation: 5;
`

export const TextoBotao = styled.Text`
  font-size: 24px;
  color: #EDEDED;
  font-weight: 600;
`