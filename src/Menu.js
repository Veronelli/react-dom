import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

const routes = [
  {
    to: "/",
    text: "Home",
    private: false,
  },
  {
    to: "/blog",
    text: "Blog",
    private: false,
  },
  {
    to: "/profile",
    text: "Profile",
    private: true,
  },
  {
    to: "/login",
    text: "Login",
    private: false,
    showLoged: true
  },
  {
    to: "/logout",
    text: "Logout",
    private: false,
  },
];

function Menu() {
  const {auth} = useAuth();
  return (
    <>
      <nav>
        <ul>
          {routes.map((route) => {
            if((route.private && !auth.user) || (route.showLoged && !!auth.user))
              return null;
            
            return (
              <NavLink
                to={route.to}
                key={`route-${route.to}`}
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
              >
                {route.text}
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export { Menu };
