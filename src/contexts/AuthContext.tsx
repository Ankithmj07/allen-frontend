// src/context/AuthContext.tsx
import { createContext, useContext, useState } from "react";
import type {ReactNode} from "react";

type Student = {
  name: string;
  classLevel: string;
  exam: string;
};

type AuthContextType = {
  token: string | null;
  student: Student | null;
  login: (token: string, student: Student) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [student, setStudent] = useState<Student | null>(null);

  const login = (newToken: string, newStudent: Student) => {
    setToken(newToken);
    setStudent(newStudent);
  };

  const logout = () => {
    setToken(null);
    setStudent(null);
  };

  return (
    <AuthContext.Provider value={{ token, student, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
