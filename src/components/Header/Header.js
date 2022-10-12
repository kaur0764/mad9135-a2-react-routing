import React from "react";
import Form from "../Form/Form";
import "./header.css";
function Header({ setLat, setLon, setLoaded, location, setLocation }) {
  return (
    <header className="App-header">
      <p>Weather App</p>
      <Form
        setLat={setLat}
        setLon={setLon}
        setLoaded={setLoaded}
        location={location}
        setLocation={setLocation}
      />
    </header>
  );
}
export default Header;
