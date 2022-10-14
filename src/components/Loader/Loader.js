import React from "react";
import { DotPulse } from "@uiball/loaders";
import "./loader.css";

function Loader() {
  return (
    <div className="overlay">
      <DotPulse color="#282c34" size={50} />
    </div>
  );
}

export default Loader;
