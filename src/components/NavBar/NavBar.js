import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import PreviousSearches from "../PreviousSearches/PreviousSearches";

function NavBar({ location, setLat, setLon }) {
  let locationArray = [];
  if (location) {
    locationArray = location;
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
        <p>Previous Searches:</p>
        {locationArray.map((item) => (
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
