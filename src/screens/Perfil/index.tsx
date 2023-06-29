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
import { UserPic, UserUpdate } from "../../services/usuario";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const { perfil, user, setUser } = useAuth();

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleChange = (campo: string, valor: string) => {
    setUser((userAntigo: any) => ({ ...userAntigo, [campo]: valor }));
  };

  const handleSubmit = () => {
    UserUpdate(user.id, user);
  };

  return (
    <Container>
      <ProfilePicture source={{ uri: "aaaaa" }} />
      <ProfileTitle>Informações da conta:</ProfileTitle>
      <ScrollView contentContainerStyle={{ width: "100%" }}>
        {edit === false ? (
          <>
            <ProfileTitle>Nome:</ProfileTitle>
            <TextProfile>{user.nome}</TextProfile>
            <ProfileTitle>E-mail:</ProfileTitle>
            <TextProfile>{user.user.email}</TextProfile>
            <ProfileTitle>Username:</ProfileTitle>
            <TextProfile>{user.user.username}</TextProfile>
            <ProfileTitle>CPF:</ProfileTitle>
            <TextProfile>{user.cpf}</TextProfile>
            <ProfileTitle>CEP:</ProfileTitle>
            <TextProfile>{user.endereco.cep}</TextProfile>
            <ProfileTitle>UF:</ProfileTitle>
            <TextProfile>{user.endereco.uf}</TextProfile>
            <ProfileTitle>Cidade:</ProfileTitle>
            <TextProfile>{user.endereco.localidade}</TextProfile>
            <ProfileTitle>Complemento:</ProfileTitle>
            <TextProfile>{user.endereco.complemento}</TextProfile>
          </>
        ) : (
          <>
            <TextProfileEditing
              defaultValue={user.nome}
              onChangeText={(value) => handleChange("nome", value)}
            />
            <TextProfileEditing
              defaultValue={user.user.email}
              onChangeText={(value) => handleChange("email", value)}
            />
            <TextProfileEditing
              defaultValue={user.user.username}
              onChangeText={(value) => handleChange("username", value)}
            />
            <TextProfileEditing
              defaultValue={user.cpf}
              editable={false}
              onChangeText={(value) => handleChange("cpf", value)}
            />
            <TextProfileEditing
              defaultValue={user.endereco.cep}
              onChangeText={(value) => handleChange("cep", value)}
            />
            <TextProfileEditing
              defaultValue={user.endereco.uf}
              onChangeText={(value) => handleChange("uf", value)}
            />
            <TextProfileEditing
              defaultValue={user.endereco.localidade}
              onChangeText={(value) => handleChange("cidade", value)}
            />
            <TextProfileEditing
              defaultValue={user.endereco.complemento}
              onChangeText={(value) => handleChange("complemento", value)}
            />
          </>
        )}
      </ScrollView>
      {edit ? (
        <EditButton onPress={handleEdit}>
          <EditButtonText>Enviar</EditButtonText>
        </EditButton>
      ) : (
        <EditButton onPress={handleEdit}>
          <EditButtonText>Editar Informações</EditButtonText>
        </EditButton>
      )}
    </Container>
  );
};
export default Profile;
