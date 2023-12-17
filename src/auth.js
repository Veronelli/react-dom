import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = ({ username }) => {
    setUser(username);
    navigate("/profile")
  };
  const logout = () => {
    setUser(null);
    navigate("/")
  };
  const auth = { user, login, logout };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const auth = useContext(AuthContext);
  return { auth };
}

export { AuthProvider, useAuth };
