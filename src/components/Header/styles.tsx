import styled from "styled-components/native";
import global from "../../themes/global";

export const Body = styled.View`
    background-color: ${global.surfaceVariant};
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
    color: ${global.secondary};
    font-weight: bold;
    font-size: 32px;
`;