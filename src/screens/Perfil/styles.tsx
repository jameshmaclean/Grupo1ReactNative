import styled from "styled-components/native";
import global from "../../themes/global";

export const Container = styled.View`
  background-color: ${global.surface};
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
  border-color: ${global.surfaceVariant};
`;

export const TextProfile = styled.Text`
  background-color: ${global.background};
  border-radius: 5px;
  padding: 5px;
  font-size: 20px;
  margin-bottom: 15px;
  width: 300px;
`;

export const TextProfileEditing = styled.TextInput`
  background-color: ${global.background};
  border-radius: 5px;
  padding: 5px;
  font-size: 20px;
  margin-bottom: 15px;
  width: 300px;
`;
export const EditButton = styled.TouchableOpacity`
  width: 75%;
  height: 5%;
  background-color: ${global.primary};
  margin-bottom: 30px;
  text-align: center;
  border-radius: 5px;
`;
export const EditButtonText = styled.Text`
  color: ${global.background};
  font-size: 20px;
  align-self: center;
`;

export const ProfileTitle = styled.Text`
  color: ${global.primary};
  font-size: 20px;
  font-weight: 800;
  text-align: left;
  margin-bottom: 3px;
`;
