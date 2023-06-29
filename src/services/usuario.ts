import { IUser } from "../Model/User";
import { api } from "./api";
import { IUserData } from "../contexts/authContext";

type userType = {
  email: string;
  nome: string;
  nomeUser: string;
  telefone: string;
  cpf: string;
  compra: boolean;
  venda: boolean;
  data: string;
  cep: string;
  numero: string;
  complemento: string;
  password: string;
  roles: string[];
  url: string;
};

export const UserRegister = async (user: userType) => {
  const produto = await api.get("usuario/inserir", {
    params: {
      email: user.email,
    },
    data: [
      {},
      {
        email: user.email,
        nome: user.nome,
        nomeUser: user.nomeUser,
        telefone: user.telefone,
        cpf: user.cpf,
        compra: user.compra,
        venda: user.venda,
        data: user.data,
        cep: user.cep,
        numero: user.numero,
        complemento: user.complemento,
        password: user.password,
        roles: user.roles,
        url: user.url,
      },
    ],
  });
  return produto;
};

export const UserUpdate = async (id: number, user: IUserData) => {
  const produto = await api.put("usuario/atualizar/" + id, user)
  return produto;
};

export const UserById = async (id: number) => {
  const usuario = await api.get("usuario/lista/" + id);
  return usuario;
};

export const UserPic = async (id: number) => {
  const produto = await api.get("usuario/" + id + "/foto");
  return produto;
};

export const UserDelete = async (id: number) => {
  const produto = await api.delete("usuario/lista/" + id);
  return produto;
};
