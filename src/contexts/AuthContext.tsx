// src/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie"
import type { ReactNode } from "react";

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

  useEffect(() => {
    // On initial load, check cookies
    const savedToken = Cookies.get("token");
    const savedStudent = Cookies.get("student");

    if (savedToken && savedStudent) {
      try {
        const parsedStudent: Student = JSON.parse(savedStudent);
        setToken(savedToken);
        setStudent(parsedStudent);
      } catch (error) {
        console.error("Failed to parse student data from cookie");
      }
    }
  }, []);

  const login = (newToken: string, newStudent: Student) => {
    setToken(newToken);
    setStudent(newStudent);

    //const inOneMinute = new Date(new Date().getTime() + 60 * 1000);

    Cookies.set("token", newToken, { expires: 7 }); 
    Cookies.set("student", JSON.stringify(newStudent), { expires: 7 });
  };

  const logout = () => {
    setToken(null);
    setStudent(null);

    Cookies.remove("token");
    Cookies.remove("student");
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
