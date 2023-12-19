import React, { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const AuthContext = React.createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = ({ username }) => {
    setUser(username);
    navigate("/profile");
  };
  const logout = () => {
    setUser(null);
    navigate("/");
  };
  const auth = { user, login, logout };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function AuthRoute({ children }) {
  const { auth } = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return children;
}

function NoShowOnAuth({ children }) {
  const { auth } = useAuth();
  if (auth.user) {
    return <Navigate to="/profile" />;
  }
  return children;
}

function useAuth() {
  const auth = useContext(AuthContext);
  return { auth };
}

export { AuthProvider, useAuth, AuthRoute, NoShowOnAuth };
