"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { getToken } from "../app/actions";

type AuthContextType = {
  authorised: boolean;
  setIsAuthorised: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType | null>(null);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authorised, setIsAuthorised] = useState(false);

  useEffect(() => {
    getToken().then((token) => {
      setIsAuthorised(!!token);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authorised, setIsAuthorised }}>
      {children}
    </AuthContext.Provider>
  );
};
