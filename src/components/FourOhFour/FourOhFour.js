import React from "react";
import "./fourOhFour.css";

function FourOhFour({ setLoaded }) {
  setTimeout(setLoaded, 3000, true);
  return (
    <div className="fourOhFourPage">
      <i className="material-icons">&#xe811;</i>
      <h1>404</h1>
      <p>Oops, This page not found!</p>
    </div>
  );
}

export default FourOhFour;
