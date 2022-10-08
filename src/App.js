import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { getForecast } from "./weather.service";
import Loader from "./components/Loader/Loader";

function App() {
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");
  const [forecast, setForecast] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (lat && lon) {
      getData();
    }
  }, [lon, lat]);

  const getData = async () => {
    let data = await getForecast({
      coord: {
        lon,
        lat,
      },
      units: "metric",
    });
    setForecast(data);
  };

  if (!navigator.geolocation) {
    console.log("Geolocation is not supported by your browser");
  } else {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }

  navigator.permissions
    .query({ name: "geolocation" })
    .then((permissionStatus) => {
      if (permissionStatus.state === "denied") {
        setTimeout(setLoaded, 800, true);
      }
      permissionStatus.onchange = () => {
        if (permissionStatus.state === "denied") {
          setTimeout(setLoaded, 800, true);
        }
      };
    });

  return (
    <div className="App">
      <Header />
      <Home forecast={forecast} setLoaded={setLoaded} />
      {!loaded && <Loader />}
    </div>
  );
}

export default App;
