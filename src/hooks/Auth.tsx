/* eslint-disable no-shadow */
import axios from 'axios';
import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface SignInCredentials {
  cpf: string;
  password: string;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface AuthContextData {
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@opEleicoes:token');

    if (token) {
      api.defaults.headers.authorization = `${token}`;
      return { token };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ cpf, password }) => {
    await axios
      .get('https://rota.pm.rn.gov.br/sanctum/csrf-cookie')
      .then(() => {
        return axios
          .post(`https://rota.pm.rn.gov.br/api/login`, { cpf, password })
          .then(() => {
            const token = `api-key:dtyjredtyhrt@45yjh$%^&4456 cpf:${cpf}`;
            localStorage.setItem('@opEleicoes:token', token);
            api.defaults.headers.authorization = `api-key:dtyjredtyhrt@45yjh$%^&4456 cpf:${cpf}`;
            setData({ token });
          })
          .catch(() => {
            throw new Error('CPF ou Senha Incorreto(a)');
          });
      });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@opEleicoes:token');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ token: data.token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must de used within an AuthProvider');

  return context;
}
