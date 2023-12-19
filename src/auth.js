import React, { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const AuthContext = React.createContext({});
const adminList = [
  { username: "facu", roles: ["admin"] },
  { username: "silvia", roles: ["editor", "writer"] },
  { username: "mariano", roles: ["writer", "deleter"] },
];

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [roles, setRoles] = useState([])
  const navigate = useNavigate();

  const login = ({ username }) => {
    const adminUser = adminList.find((user) => user.username === username );
    setIsAdmin(adminUser.roles.includes("admin"));
    const userRoles = adminUser ? adminUser.roles : [];
    setRoles(userRoles)
    setUser(username);
    navigate("/profile");
  };
  const logout = () => {
    setUser(null);
    setIsAdmin(false);
    setRoles([])
    navigate("/");
  };
  const auth = { user, login, logout };
  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin, roles }}>
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
