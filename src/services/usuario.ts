import { IUser } from "../Model/User";
import { api } from "./api";

export interface userType {
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
}

export const UserRegister = async (user: userType) => {
  const usuario = await api.get("usuario/inserir", {
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
  return usuario;
};

export const UserUpdate = async (id: IUser, user: userType) => {
  try {
    const usuario = await api.put("usuario/atualizar/" + id, user);
    return usuario;
  } catch (error) {
    console.log("Erro na atualização do usuário:", error);
    throw error;
  }
};

export const UserById = async (id: IUser) => {
  try {
    const response = await api.get("usuario/lista/" + id);
    return response.data; 
  } catch (error) {
    throw new Error("Erro ao obter usuário por ID: " + error); // Lança um erro com uma mensagem descritiva
  }
};

export const UserPic = async (id: number) => {
  const usuario = await api.get("usuario/" + id + "/foto");
  return usuario;
};

export const UserDelete = async (id: number) => {
  const usuario = await api.delete("usuario/lista/" + id);
  return usuario;
};
