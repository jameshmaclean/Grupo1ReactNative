import React, { createContext, useEffect, useState } from "react";

interface IUser {
    id: number;
    url: string;
    nome: string,
    email: string,
    userName: string,
    cpf: string,
    cep: string,
    uf: string,
    cidade: string,
    complemento: string,
}
interface IContext {
    user: IUser
}
const userCo = {
    id: 1,
    url: "https://static.toiimg.com/thumb/msid-68343906,imgsize-1231830,width-400,resizemode-4/68343906.jpg",
    nome: "Daniel",
    email: "daniel@daniel.com",
    userName: "daniel",
    cpf: "111.111.111-11",
    cep: "25654-805",
    uf: "RJ",
    cidade: "Petrópolis",
    complemento: "56d",
  }

export const UserContext = createContext<IContext|null>({user: userCo});

export const UserContextProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<IUser>({
    id: 1,
    url: "https://static.toiimg.com/thumb/msid-68343906,imgsize-1231830,width-400,resizemode-4/68343906.jpg",
    nome: "Daniel",
    email: "daniel@daniel.com",
    userName: "daniel",
    cpf: "111.111.111-11",
    cep: "25654-805",
    uf: "RJ",
    cidade: "Petrópolis",
    complemento: "56d",
  });

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
