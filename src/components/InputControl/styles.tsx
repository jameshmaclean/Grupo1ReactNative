import styled from "styled-components/native";
import global from "../../themes/global";
import { tt } from "../../themes/themeType";

export const Container = styled.View`
  width: 300px;
  height: 40px;
  color: ${(props : tt) => props.theme.secondary};
  font-size: 20px;
  background-color: ${(props : tt) => props.theme.background};
  margin: 20px;
  border-radius: 5px;
`;

