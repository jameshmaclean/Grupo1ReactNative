import styled from "styled-components/native";
import global from "../../themes/global";
import { tt } from "../../themes/themeType";

export const Header = styled.View`
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

export const Container = styled.View `
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${(props : tt) => props.theme.surface};
`;

export const SearchBar = styled.TextInput`
    background-color: ${(props : tt) => props.theme.background};
    border-radius: 10px;
    width: 80%;
    height: 45px;
    padding-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px;

`;

export const ContainerProdutos = styled.View`

    width: 90%;
    padding-left: 15px;
    padding-right: 15px;
`;


export const InputButton = styled.TouchableOpacity`
    background-color: ${(props : tt) => props.theme.background};
    border-radius: 10px;
    width: 80%;
    height: 45px;
    padding-left: 10px;
    margin-top: 20px;
    margin-bottom: 10px;
    justify-content: center;
    `;

export const PlaceholderText = styled.Text`
    color: ${(props : tt) => props.theme.placeholder};
    `; 

export const WrittenText = styled(PlaceholderText)`
    color: ${(props : tt) => props.theme.input};
    `;

export const AddToCart = styled.TouchableOpacity`
    background-color: ${(props : tt) => props.theme.primary};
    align-self: center;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 40px;
    border-radius: 10px;
    `;

export const Filter = styled.TouchableOpacity`
    width: 80%;
    margin-bottom: 10px;
    justify-content: center;
    align-items: flex-end;
    `;

export const FilterText = styled.Text`
    color: ${(props : tt) => props.theme.primary};
    font-weight: bold;
    font-size: 20px;
`;

export const ProdutoCard = styled.View`
    background-color: ${(props : tt) => props.theme.background};
    width: 46%;
    min-width: 180px;
    height:250px;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 10px;
    justify-content: space-between;

`;

export const ProductImage = styled.Image`
    width: 95%;
    height: 60%;
    align-self: center;
    `;

export const ProductInfo = styled.View`
    width: 95%;
    margin-bottom: 5px;
    margin-left: 5px;

`;

export const TextInfo = styled.Text`
    color: ${(props : tt) => props.theme.primary};
    font-weight: bold;
    font-size: 16px;
`;

export const ButtonText = styled.Text`
    color: ${(props : tt) => props.theme.background};
    font-size: 20px;
`;




