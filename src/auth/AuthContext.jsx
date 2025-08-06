import { createContext, useState, useEffect } from 'react';
import { fetchCurrentUser } from '../services/api'; // sua função que busca /me no backend

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchCurrentUser()
      .then(userData => {
        setUser(userData);
      })
      .catch(() => {
        setUser(null);
      })
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
}