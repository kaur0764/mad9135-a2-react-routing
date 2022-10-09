import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <div id="navbar">
      <NavLink
        to="/home"
        className="navlink"
        style={({ isActive }) => ({ color: isActive ? "purple" : "black" })}
      >
        Home
      </NavLink>
      <NavLink
        to="/hourly"
        className="navlink"
        style={({ isActive }) => ({ color: isActive ? "purple" : "black" })}
      >
        Hourly
      </NavLink>
    </div>
  );
}

export default NavBar;
