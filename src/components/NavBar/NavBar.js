import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <NavLink
        to="/home"
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        Home
      </NavLink>
      <NavLink
        to="/hourly"
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        Hourly
      </NavLink>
    </>
  );
}

export default NavBar;
