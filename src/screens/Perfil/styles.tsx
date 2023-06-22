import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #ededed;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const ProfilePicture = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: 10%;
  margin-bottom: 5%;
  border-radius: 100px;
  border-width: 2px;
  border-color: #b9b9b9;
`;

export const TextProfile = styled.Text`
  background-color: #fff;
  border-radius: 5px;
  padding: 5px;
  font-size: 20px;
  margin-bottom: 15px;
  width: 300px;
`;

export const TextProfileEditing = styled.TextInput`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 5px;
  font-size: 20px;
  margin-bottom: 15px;
  width: 300px;
`;
export const EditButton = styled.TouchableOpacity`
  width: 75%;
  height: 5%;
  background-color: #705a54;
  margin-bottom: 30px;
  text-align: center;
  border-radius: 5px;
`;
export const EditButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  align-self: center;
`;

export const ProfileTitle = styled.Text`
    color : #705a54;
    font-size: 20px;
    font-weight: 800;
    text-align: left;
    margin-bottom: 3px;
`
