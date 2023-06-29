import styled from 'styled-components/native';
import global from '../../themes/global';
import { tt } from "../../themes/themeType";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props : tt) => props.theme.surface};
`;

export const Button = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  margin-bottom: 20px;
  background-color: ${(props : tt) => props.theme.primary};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: ${(props : tt) => props.theme.background};
  font-size: 18px;
`;
