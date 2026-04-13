import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    id: 1,
    fullName: 'Aruzhan User',
    role: 'client',
    token: 'demo-jwt-token'
  });

  const value = useMemo(
    () => ({
      user,
      switchRole: (role) => setUser((prev) => ({ ...prev, role }))
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
