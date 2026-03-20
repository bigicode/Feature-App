import { createContext, useContext, useState } from "react";

import {
  clearStoredAdminSession,
  getStoredAdminSession,
  setStoredAdminSession,
} from "../utils/authStorage";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => getStoredAdminSession());

  function login(nextSession) {
    setStoredAdminSession(nextSession);
    setSession(nextSession);
  }

  function logout() {
    clearStoredAdminSession();
    setSession(null);
  }

  return (
    <AuthContext.Provider
      value={{
        admin: session?.admin || null,
        token: session?.token || null,
        isAuthenticated: Boolean(session?.token),
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}
