import styled from "styled-components/native";
import global from "../../themes/global";
import { tt } from "../../themes/themeType";

export const Container = styled.View`
  background-color: ${(props : tt) => props.theme.surface};
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
  border-color: ${(props : tt) => props.theme.surfaceVariant};
`;

export const TextProfile = styled.Text`
  background-color: ${(props : tt) => props.theme.background};
  border-radius: 5px;
  padding: 5px;
  font-size: 20px;
  margin-bottom: 15px;
  width: 300px;
`;

export const TextProfileEditing = styled.TextInput`
  background-color: ${(props : tt) => props.theme.background};
  border-radius: 5px;
  padding: 5px;
  font-size: 20px;
  margin-bottom: 15px;
  width: 300px;
`;
export const EditButton = styled.TouchableOpacity`
  width: 75%;
  height: 5%;
  background-color: ${(props : tt) => props.theme.primary};
  margin-bottom: 30px;
  text-align: center;
  border-radius: 5px;
`;
export const EditButtonText = styled.Text`
  color: ${(props : tt) => props.theme.background};
  font-size: 20px;
  align-self: center;
`;

export const ProfileTitle = styled.Text`
  color: ${(props : tt) => props.theme.primary};
  font-size: 20px;
  font-weight: 800;
  text-align: left;
  margin-bottom: 3px;
`;
