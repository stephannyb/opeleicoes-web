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
  // user: UserData;
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: UserData): void;
}

interface AuthState {
  token: string;
  // user: UserData;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@opEleicoes:token');
    // const user = localStorage.getItem('@opEleicoes:user');

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ cpf, password }) => {
    // const apiResponse = await api.post<AuthState>('session', {
    //   cpf,
    //   password,
    // });

    const response = await axios
      .get('https://rota.pm.rn.gov.br/sanctum/csrf-cookie')
      .then(() => {
        return axios
          .post(`https://rota.pm.rn.gov.br/api/login`, { cpf, password })
          .then(res => {
            return res.data.data;
          })
          .catch(() => {
            throw new Error('CPF ou Senha Incorreto(a)');
          });
      });

    const { token } = response;

    localStorage.setItem('@opEleicoes:token', token);
    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({ token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@opEleicoes:token');
    localStorage.removeItem('@opEleicoes:user');
    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: UserData) => {
      setData({
        token: data.token,
      });
      localStorage.setItem('@opEleicoes:user', JSON.stringify(user));
    },
    [data.token],
  );

  return (
    <AuthContext.Provider
      value={{ token: data.token, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must de used within an AuthProvider');

  return context;
}
