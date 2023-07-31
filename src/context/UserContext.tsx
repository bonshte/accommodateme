import React, { createContext, useState, ReactNode, useContext } from 'react';

interface UserContextProps {
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
  const [isAuth, setIsAuth] = useState(hasToken);
  const value: UserContextProps = {
    isAuth,
    setIsAuth,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};