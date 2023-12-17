import React from "react";
import { NavLink } from "react-router-dom";

const routes = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/blog",
    text: "Blog",
  },
  {
    to: "/profile",
    text: "Profile",
  },
  {
    to: "/login",
    text: "Login"
  },
  {
    to: "/logout",
    text: "Logout"
  }
];

function Menu() {
  return (
    <>
      <nav>
        <ul>
          {routes.map((route) => (
            <NavLink
              to={route.to}
              key={`route-${route.to}`}
              style={({isActive}) => ({ color: isActive ? "red" : "black" })}
            >
              {route.text}
            </NavLink>
          ))}
        </ul>
      </nav>
    </>
  );
}

export { Menu };
