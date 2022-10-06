import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [lon, setLon] = useState(null);
  const [lat, setLat] = useState(null);

  if (!navigator.geolocation) {
    console.log("Geolocation is not supported by your browser");
  } else {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
