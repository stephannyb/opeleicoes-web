import axios from 'axios';
import React, { createContext, useCallback, useState, useContext } from 'react';
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
  user: UserData;
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
    const token = localStorage.getItem('@GoBarber:token');
    // const user = localStorage.getItem('@GoBarber:user');

    // if (token && user) {
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      // return { token, user: JSON.parse(user) };
      return { token };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ cpf, password }) => {
    // const response = await api.post<AuthState>('session', {
    //   cpf,
    //   password,
    // });

    // const { token, user } = response.data;
    // localStorage.setItem('@GoBarber:token', token);
    // localStorage.setItem('@GoBarber:user', JSON.stringify(user));
    // api.defaults.headers.authorization = `Bearer ${token}`;
    // setData({ token, user });

    const response = await axios
      .get('https://rota.pm.rn.gov.br/sanctum/csrf-cookie')
      .then(() => {
        return axios
          .post(`https://rota.pm.rn.gov.br/api/login`, { cpf, password })
          .then(res => {
            return res.data;
          })
          .catch(err => {
            // throw new AppError('Incorrect email or password', 401);
            console.log('post error: ', err);
          });
      });

    const { token } = response;
    setData(token);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');
    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: UserData) => {
      setData({
        token: data.token,
        // user,
      });
      localStorage.setItem('@GoBarber:user', JSON.stringify(user));
    },
    [data.token],
  );

  return (
    <AuthContext.Provider
      // value={{ user: data.user, signIn, signOut, updateUser }}
      value={{ signIn, signOut, updateUser }}
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
