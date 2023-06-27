import { useContext, useState } from "react";
import { ScrollView } from "react-native";
import {
  Container,
  ProfilePicture,
  TextProfile,
  TextProfileEditing,
  EditButton,
  EditButtonText,
  ProfileTitle,
} from "./styles";
import { useAuth } from "../../contexts/authContext";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const { user, setUser } = useAuth();

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleChange = (campo: string, valor: string) => {
    setUser((userAntigo: any) => ({ ...userAntigo, [campo]: valor }));
  };

  return (
    <Container>
      <ProfilePicture source={{ uri: user.url }} />
      <ProfileTitle>Informações da conta:</ProfileTitle>
      <ScrollView contentContainerStyle={{ width: "100%" }}>
        {edit === false ? (
          <>
            <ProfileTitle>Nome:</ProfileTitle>
            <TextProfile>{user.nome}</TextProfile>
            <ProfileTitle>E-mail:</ProfileTitle>
            <TextProfile>{user.email}</TextProfile>
            <ProfileTitle>Username:</ProfileTitle>
            <TextProfile>{user.userName}</TextProfile>
            <ProfileTitle>CPF:</ProfileTitle>
            <TextProfile>{user.cpf}</TextProfile>
            <ProfileTitle>CEP:</ProfileTitle>
            <TextProfile>{user.cep}</TextProfile>
            <ProfileTitle>UF:</ProfileTitle>
            <TextProfile>{user.uf}</TextProfile>
            <ProfileTitle>Cidade:</ProfileTitle>
            <TextProfile>{user.cidade}</TextProfile>
            <ProfileTitle>Complemento:</ProfileTitle>
            <TextProfile>{user.complemento}</TextProfile>
          </>
        ) : (
          <>
            <TextProfileEditing
              defaultValue={user.nome}
              onChangeText={(value) => handleChange("nome", value)}
            />
            <TextProfileEditing
              defaultValue={user.email}
              onChangeText={(value) => handleChange("email", value)}
            />
            <TextProfileEditing
              defaultValue={user.userName}
              onChangeText={(value) => handleChange("username", value)}
            />
            <TextProfileEditing
              defaultValue={user.cpf}
              editable={false}
              onChangeText={(value) => handleChange("cpf", value)}
            />
            <TextProfileEditing
              defaultValue={user.cep}
              onChangeText={(value) => handleChange("cep", value)}
            />
            <TextProfileEditing
              defaultValue={user.uf}
              onChangeText={(value) => handleChange("uf", value)}
            />
            <TextProfileEditing
              defaultValue={user.cidade}
              onChangeText={(value) => handleChange("cidade", value)}
            />
            <TextProfileEditing
              defaultValue={user.complemento}
              onChangeText={(value) => handleChange("complemento", value)}
            />
          </>
        )}
      </ScrollView>
      <EditButton onPress={handleEdit}>
        <EditButtonText>Editar Informações</EditButtonText>
      </EditButton>
    </Container>
  );
};
export default Profile;
