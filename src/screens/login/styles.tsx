import styled from "styled-components/native";
import global from "../../themes/global";
import { tt } from "../../themes/themeType";

export const MainView = styled.View`
  flex: 1;
  background-color: ${(props : tt) => props.theme.surface};
  align-items: center;
  justify-content: center;
`;
export const Texto = styled.Text`
  width: 300px;
  font-size: 20px;
  color: ${(props : tt) => props.theme.secondary};
  text-align: center;
`;
export const Input = styled.TextInput`
  width: 300px;
  height: 40px;
  color: ${(props : tt) => props.theme.secondary};
  font-size: 20px;
  background-color: ${(props : tt) => props.theme.background};
  margin: 20px;
  padding-left: 40px;
  border-radius: 5px;
`;
export const Viewtv = styled.View`
  border-radius: 10px;
  position: relative;
`;
export const TextReg = styled.Text`
  color: ${(props : tt) => props.theme.primary};
  font-size: 15px;
`;
export const TextReg2 = styled.Text`
  color: ${(props : tt) => props.theme.primary};
  margin-top: 20px;
  font-size: 15px;
`;
export const Imag = styled.Image`
  margin-bottom: 15px;
  width: 300px;
  height: 150px;
`;
export const Butao = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 200px;
  background-color: ${(props : tt) => props.theme.primary};
  border-radius: 10px;
  margin-top: 40px;
`;
export const TextLogarrb = styled.Text`
  font-size: 20px;
  color: ${(props : tt) => props.theme.background};
`;
