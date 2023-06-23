import styled from "styled-components/native";

export const Header = styled.View`
    background-color: #D9D9D9;
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
    color: #704032;
    font-weight: bold;
    font-size: 32px;
`;

export const Container = styled.View `
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #EDEDED;
`;

export const SearchBar = styled.TextInput`
    background-color: #FFFFFF;
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
    background-color: #FFFFFF;
    border-radius: 10px;
    width: 80%;
    height: 45px;
    padding-left: 10px;
    margin-top: 20px;
    margin-bottom: 10px;
    justify-content: center;
    `;

export const PlaceholderText = styled.Text`
    color: gray;
    `; 

export const WrittenText = styled(PlaceholderText)`
    color: black;
    `;

export const UserInput = styled.TextInput`
    color: blue;
    border-width: 2px;
    border-color: black;
    `;

export const ViewInput = styled.View`
    background-color: red;
    padding: 20px;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    `;

export const AddToCart = styled.TouchableOpacity`
    background-color: #705A54;
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
    color: #705A54;
    font-weight: bold;
    font-size: 20px;
`;

export const ProdutoCard = styled.View`
    background-color: white;
    width: 46%;
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
    color: #705A54;
    font-weight: bold;
    font-size: 16px;
`;

export const ButtonText = styled.Text`
    color: #EDEDED;
    font-size: 20px;
`;


