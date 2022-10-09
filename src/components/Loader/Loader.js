import React from "react";
import { DotPulse } from "@uiball/loaders";
import "./loader.css";

function Loader() {
  return (
    <div className="overlay">
      <DotPulse color="black" size={50} />
    </div>
  );
}

export default Loader;
