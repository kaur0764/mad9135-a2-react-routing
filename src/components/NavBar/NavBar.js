import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import PreviousSearches from "../PreviousSearches/PreviousSearches";

function NavBar({ location, setLat, setLon }) {
  if (location.length) {
    let span = document.querySelector("p span");
    if (span) {
      span.classList.remove("showSpan");
    }
  }
  return (
    <div id="navbar">
      <div className="navlinks">
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
        <NavLink
          to="/daily"
          className="navlink"
          style={({ isActive }) => ({ color: isActive ? "purple" : "black" })}
        >
          Daily
        </NavLink>
      </div>
      <aside>
        <p>
          Previous Searches: <span className="showSpan">None </span>
        </p>
        {location.map((item) => (
          <PreviousSearches
            key={item}
            item={item}
            setLat={setLat}
            setLon={setLon}
          />
        ))}
      </aside>
    </div>
  );
}

export default NavBar;
