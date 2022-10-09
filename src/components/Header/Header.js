import React from "react";
import Form from "../Form/Form";
import "./header.css";

function Header({ setLat, setLon, setLoaded }) {
  return (
    <header className="App-header">
      <p>React Router</p>
      <Form setLat={setLat} setLon={setLon} setLoaded={setLoaded} />
    </header>
  );
}
export default Header;
