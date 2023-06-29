import React, { createContext, useContext } from "react";
import { api } from "../services/api";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "../Model/User";
import { UserById, UserPic } from "../services/usuario";

interface IAuthState {
  accessToken: string;
  id: IUser;
}

interface ICredentials {
  username: string;
  password: string;
}

interface IAuthContext {
  id: IUser;
  login(credential: ICredentials): void;
  logout(): void;
  user: IUserData;
  setUser(user: any): any;
  perfil: string;
}

interface IProps {
  children: React.ReactElement;
}

export interface IUserData {
  id: number;
  telefone: string;
  compra: boolean;
  venda: boolean;
  data: string;
  url: string;
  nome: string;
  email: string;
  nomeUser: string;
  numero: string;
  cpf: string;
  cep: string;
  complemento: string;
  user: any;
  endereco: any;
  password: string;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
const tokenData = "@DevProvile: accessToken";
const userData = "@DevProfile: id";
console.log(tokenData, userData);

const AuthProvider: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = React.useState<IUserData>({} as IUserData);
  const [data, setData] = React.useState<IAuthState>({} as IAuthState);
  const [perfil, setPerfil] = React.useState("https://wp-content.bluebus.com.br/wp-content/uploads/2017/03/31142426/twitter-novo-avatar-padrao-2017-bluebus-660x440.png");
  React.useEffect(() => {
    async function loadAuthData() {
      const accessToken = await AsyncStorage.getItem(tokenData);
      const id = await AsyncStorage.getItem(userData);
      if (accessToken && id) {
        setData({ accessToken, id: JSON.parse(id) });
        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        await getUser(JSON.parse(id));
      }
    }
    loadAuthData();
  }, []);

  const login = async ({ username, password }: ICredentials) => {
    try {
      console.log(username, password);
      const response = await api.post("/auth/signin", { username, password });
      console.log("dados", response);
      const { accessToken, id } = response.data;
      await AsyncStorage.setItem(tokenData, accessToken);
      await AsyncStorage.setItem(userData, JSON.stringify(id));
      console.log(accessToken, id);
      api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      setData({ accessToken, id });
      await getUser(id);
    } catch (error) {
      Alert.alert("Erro na autenticação", "Ocorreu um erro ao fazer login");
      console.log(error);
    }
  };
  const logout = async () => {
    await AsyncStorage.removeItem(tokenData);
    await AsyncStorage.removeItem(userData);
    setData({} as IAuthState);
  };

  const getUser = async (id: IUser) => {
    try {
      const response = await UserById(id);
      const userData = await response;
      setUser(userData);
      setPerfil(`http://187.58.100.32:8081/g1/usuario/${id}/foto`);
      console.log(id);
    } catch (error) {
      console.log("Erro ao obter dados do usuário:", error);
    }
  };


  return (
    <AuthContext.Provider
      value={{ perfil, setUser, user, id: data.id, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContext => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("Use auth deve ser utilizado com um AuthProvider");
  }
  return context;
};

export default AuthProvider;
