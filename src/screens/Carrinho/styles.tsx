import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #705a54;
  margin-left: 20px;
`;

export const RowTitle = styled.View`
  flex-direction: row;
  align-items: center;
  height: 10%;

`;

export const CardCarrinho = styled.View`
  background-color: #fff;
  border-radius: 10px;
  width: 90%;
  height: 200px;
  align-items: center;
  align-self: center;
  margin-bottom: 20px;
  padding: 10px;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ContainerCarrinho = styled.View`
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #ededed;
`;
export const ImagemCarrinho = styled.Image`
  height: 200px;
  width: 150px;
`;

export const CardText = styled.View``;

export const CartTitle = styled.Text`
  font-size: 30px;
  font-weight: 900;
  color: #705a54;
`;
export const CartQt = styled.Text`
  font-size: 17px;
  font-weight: 600;
  color: #705a54;
  align-self: flex-start;
`;

export const CartNum = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Remove = styled.TouchableOpacity`
  margin-top: 15px;
  background-color: #705a54;
  width: 100%;
  height: 17%;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;
export const RemoveText = styled.Text`
  color: white;
  font-weight: 800;
`;

export const ContainerTotal = styled.View`
  background-color: #EDEDED;
  width: 100%;
  height: 20%;
  justify-content: center;
`;

export const TextTotal = styled.Text`
  text-align: center;
  width: 90%;
  align-self: center;
  border-radius: 10px;
  font-weight: 700;
  color: #705a54;
  font-size: 20px;
`;

export const Finish = styled.TouchableOpacity`
  width: 60%;
  height: 35%;
  background-color: #705a54;
  border-radius: 7px;
  align-self: center;
  justify-content: center;
  margin-top: 20px;
`;

export const FinishText = styled.Text`
  color: white;
  font-weight: 800;
  align-self: center;
  font-size: 20px;
`;

export const TextTotalValor = styled.Text`
  color: #c29c91;
  font-weight: 900;
  font-size: 30px;
`;

export const ContainerText = styled.View`
    justify-content: center;
    height: 90%;
    width: 90%;
    align-self: center;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 10px;
`
