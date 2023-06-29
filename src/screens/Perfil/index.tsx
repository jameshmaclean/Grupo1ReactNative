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
import { UserUpdate } from "../../services/usuario";
import { userType } from "../../services/usuario";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const { perfil, user, setUser, id } = useAuth();

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleChange = (campo: string, valor: string) => {
    setUser((userAntigo: any) => ({ ...userAntigo, [campo]: valor }));
  };

  const handleSubmit = async () => {
    const response = await UserUpdate(id, novoUsuario as userType);
    setUser(response.data);
  };

  const novoUsuario = {
    nome: user.nome,
    nomeUser: user.nomeUser,
    telefone: user.telefone,
    email: user.email,
    cpf: user.cpf,
    compra: user.compra,
    venda: user.venda,
    data: "2023-06-28", // Nova data definida manualmente
    cep: user.cep,
    numero: user.numero,
    complemento: user.complemento,
    password: user.password,
    url: "",
  };

  return (
    <Container>
      {perfil ? <ProfilePicture source={{ uri: perfil }} /> : null}
      <ProfileTitle>Informações da conta:</ProfileTitle>
      <ScrollView contentContainerStyle={{ width: "100%" }}>
        {edit === false ? (
          <>
            <ProfileTitle>Nome:</ProfileTitle>
            <TextProfile>{user.nome}</TextProfile>
            <ProfileTitle>E-mail:</ProfileTitle>
            <TextProfile>{user.email}</TextProfile>
            <ProfileTitle>Username:</ProfileTitle>
            <TextProfile>{user.nomeUser}</TextProfile>
            <ProfileTitle>CPF:</ProfileTitle>
            <TextProfile>{user.cpf}</TextProfile>
            <ProfileTitle>CEP:</ProfileTitle>
            <TextProfile>{user.cep}</TextProfile>
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
              defaultValue={user.nomeUser}
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
              defaultValue={user.complemento}
              onChangeText={(value) => handleChange("complemento", value)}
            />
          </>
        )}
      </ScrollView>
      {edit ? (
        <EditButton onPress={handleSubmit}>
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
