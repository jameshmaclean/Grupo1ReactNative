import styled from "styled-components/native";
import global from "../../themes/global";
import { tt } from "../../themes/themeType";

export const Body = styled.View`
    background-color: ${(props : tt) => props.theme.surfaceVariant};
    height: 70px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around ;

`;

export const ButtonMenu = styled.TouchableOpacity `
background-color: transparent;

`;

export const ButtonBasket = styled.TouchableOpacity `
background-color: transparent;
`;

export const HeaderText = styled.Text`
    color: ${(props : tt) => props.theme.secondary};
    font-weight: bold;
    font-size: 32px;
`;