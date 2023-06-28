import styled from "styled-components/native";
import global from "../../themes/global";

export const MainView = styled.View`
  flex: 1;
  background-color: ${global.surface};
  align-items: center;
  justify-content: center;
`;
export const Texto = styled.Text`
  width: 300px;
  font-size: 20px;
  color: ${global.secondary};
  text-align: center;
`;
export const Input = styled.TextInput`
  width: 300px;
  height: 40px;
  color: ${global.secondary};
  font-size: 20px;
  background-color: ${global.background};
  margin: 20px;
  padding-left: 40px;
  border-radius: 5px;
`;
export const Viewtv = styled.View`
  border-radius: 10px;
  position: relative;
`;
export const TextReg = styled.Text`
  color: ${global.primary};
  font-size: 15px;
`;
export const TextReg2 = styled.Text`
  color: ${global.primary};
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
  background-color: ${global.primary};
  border-radius: 10px;
  margin-top: 40px;
`;
export const TextLogarrb = styled.Text`
  font-size: 20px;
  color: ${global.background};
`;
