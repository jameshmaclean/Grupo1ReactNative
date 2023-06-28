import styled from "styled-components/native";
import global from "../../themes/global";

export const MainContainer = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-top: 30px;
  background-color: ${global.surface};
`;
export const SearchBox = styled.View`
  height: 45px;
  width: 80%;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  border-radius: 50px;
  margin-bottom: 20px;
  background-color: ${global.background};
`;

export const InputSearch = styled.TextInput`
  height: 45px;
  width: 80%;
  padding-left: 10px;
  justify-content: center;
  background-color: ${global.background};
`;

export const CarrosselContainer = styled.View`
  margin-top: 7%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const CarrouselImg = styled.Image`
  height: 200px;
  width: 200px;
`;

export const TextRecomendado = styled.Text`
  margin-top: 30px;
  margin-bottom: 20px;
  margin-left: 20px;
  align-self: flex-start;
  font-size: 28px;
  font-weight: 500;
  color: ${global.primary};
`