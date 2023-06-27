import React, { createContext } from "react";
import { api } from "../services/Api";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "../Model/User";

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
}

interface IProps {
  children: React.ReactElement;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
const tokenData = "@DevProvile: accessToken";
const userData = "@DevProfile: id";
console.log(tokenData, userData);

const AuthProvider: React.FC<IProps> = ({ children }) => {
  const [data, setData] = React.useState<IAuthState>({} as IAuthState);
  React.useEffect(() => {
    async function loadAuthData() {
      const accessToken = await AsyncStorage.getItem(tokenData);
      const id = await AsyncStorage.getItem(userData);
      if (accessToken && id) {
        setData({ accessToken, id: JSON.parse(id) });
        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      }
    }
    loadAuthData();
  }, []);
  const login = async ({ username, password }: ICredentials) => {
    try {
      const response = await api.post("/auth/signin", { username, password });
      console.log(response.data);
      const { accessToken, id } = response.data;
      await AsyncStorage.setItem(tokenData, accessToken);
      await AsyncStorage.setItem(userData, JSON.stringify(id));
      console.log(accessToken, id);
      api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      setData({ accessToken, id });
    } catch (error) {
      Alert.alert("Erro na autenticação", "Ocorreu um erro ao fazer login");
    }
  };
  const logout = async () => {
    await AsyncStorage.removeItem(tokenData);
    await AsyncStorage.removeItem(userData);
    setData({} as IAuthState);
  };
  return (
    <AuthContext.Provider value={{ id: data.id, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContext => {
  const context = React.useContext(AuthContext);
  console.log(context);
  if (!context) {
    throw new Error("Use auth deve ser utilizado com um AuthProvider");
  }
  return context;
};

export default AuthProvider;
