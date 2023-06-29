import styled from 'styled-components/native';
import global from '../../themes/global';
import { tt } from "../../themes/themeType";

export const PageProduto = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${(props : tt) => props.theme.surface};
    padding-top: 15px;
`

export const ContainerProduto = styled.View`
    height: 90%;
    width: 90%;
    background-color: ${(props : tt) => props.theme.background};
    border-radius: 20px;
    align-items: center;
`

export const NomeProd = styled.Text`
  font-size: 35px;
  color: ${(props : tt) => props.theme.primary};
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
  color: ${(props : tt) => props.theme.primary};
  font-weight: 600;
  margin-top: 10px;
  margin-left: 7%;
  align-self: flex-start;
`

export const Estoque = styled.Text`
  font-size: 24px;
  color: ${(props : tt) => props.theme.primary};
  font-weight: 600;
  margin-left: 7%;
  align-self: flex-start;
`
export const Linha = styled.View`
  height: 3px;
  width: 80%;
  border-radius: 50px;
  margin-top: 5%;
  background-color: ${(props : tt) => props.theme.primary};
`

export const Descricao = styled.Text`
  font-size: 20px;
  color: ${(props : tt) => props.theme.primary};
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
  background-color: ${(props : tt) => props.theme.surface};
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  justify-content: center;
  align-items: center;
`
export const Botao = styled.TouchableOpacity`
  height: 50%;
  width: 80%;
  background-color: ${(props : tt) => props.theme.primary};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  shadow-color: ${(props : tt) => props.theme.shadow};
  elevation: 5;
`

export const TextoBotao = styled.Text`
  font-size: 24px;
  color: ${(props : tt) => props.theme.background};
  font-weight: 600;
`
