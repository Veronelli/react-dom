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
    showLoged: true,
  },
  {
    to: "/logout",
    text: "Logout",
    private: true,
  },
];

function Menu() {
  const { auth } = useAuth();
  return (
    <>
      <nav className="w-full bg-red-500 p-2 flex justify-between">
        <ul className="flex justify-between w-56 items-center ml-4">
          {routes.map((route) => {
            if (
              (route.private && !auth.user) ||
              (route.showLoged && !!auth.user)
            )
              return null;

            return (
              <NavLink
                to={route.to}
                key={`route-${route.to}`}
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                  fontWeight: isActive ? "bold" : "semibold",
                })}
                className="p-2 bg-red-50 rounded-md font-semibold"
              >
                {route.text}
              </NavLink>
            );
          })}
        </ul>
        <p className="p-2 bg-red-50 rounded-md">
          Is Admin: <span>{auth.isAdmin.toString()}</span>
        </p>
      </nav>
    </>
  );
}

export { Menu };
