import React, { createContext, useState, ReactNode, useContext } from 'react';

interface UserContextProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;

}

export const UserContext = createContext<UserContextProps | null>(null);

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {

  const token = localStorage.getItem("token");
  const hasToken = token ? true : false;
  const [username, setUsername] = useState<string>("");
  const [isAuth, setIsAuth] = useState(hasToken);

  const login = () => {
    return <h1>login</h1>;
  };

  const logout = () => {
    return <h1>logout</h1>;
  };

  const value: UserContextProps = {
    username,
    setUsername,
    isAuth,
    setIsAuth,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};