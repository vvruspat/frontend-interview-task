import React, { createContext, FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setJWTToken } from './api/API';
import { selectJWT } from './store/login/loginSlice';
import { TLoginJWT } from './types/login-jwt.type';

export const AuthContext = createContext<TLoginJWT | null>(null);

export const AuthProvider: FC = ({ children }) => {
  const jwt = useSelector(selectJWT);

  useEffect(() => {
    setJWTToken(jwt?.token || '');
  }, [jwt]);

  return (
    <AuthContext.Provider value={jwt}>
      {children}
    </AuthContext.Provider>
  );
}
