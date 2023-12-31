import styled from 'styled-components/native';
import global from '../../themes/global';
import { tt } from "../../themes/themeType";

export const Container = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  height: 1200px;
  background-color: ${(props : tt) => props.theme.surface};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${(props : tt) => props.theme.primary};
`;

export const FormGroup = styled.View`
  margin-bottom: 20px;
  margin-left: 5px;
`;

export const Label = styled.Text`
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  height: 40px;
  padding: 5px;
  font-weight: bold;
  background-color: ${(props : tt) => props.theme.background};
  border-radius: 10px;
  width: 95%;
  align-self: center;
  padding-left: 10px;
`;

export const Button1 = styled.TouchableOpacity`
  background-color: ${(props : tt) => props.theme.primary};
  padding: 10px;
  align-items: center;
  border-radius: 5px;
  width: 80%;
  justify-content: center;
  align-self: center;
`;

export const ButtonText = styled.Text`
  color: ${(props : tt) => props.theme.background};
  font-size: 16px;
  font-weight: bold;
`;

export const Preechimento = styled.View`
  height: 40px;
  background-color: ${(props : tt) => props.theme.surface};
`