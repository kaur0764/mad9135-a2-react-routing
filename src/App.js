import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { getForecast } from "./weather.service";
import Loader from "./components/Loader/Loader";
import Hourly from "./components/Hourly/Hourly";
import NavBar from "./components/NavBar/NavBar";
import FourOhFour from "./components/FourOhFour/FourOhFour";

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

  function convertTime(timestamp) {
    let time = new Date(timestamp * 1000);
    let hours = time.getHours();
    if (hours > 12) {
      hours = hours - 12;
    }
    let minutes = "0" + time.getMinutes();
    let timeString = time.toDateString();
    let date = timeString.substring(timeString.indexOf(" ") + 1);
    let day = timeString.substring(0, timeString.indexOf(" "));
    return { hours, minutes, date, day };
  }

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              forecast={forecast}
              setLoaded={setLoaded}
              convertTime={convertTime}
            />
          }
        />
        <Route
          path="/hourly"
          element={
            <Hourly
              forecast={forecast}
              convertTime={convertTime}
              setLoaded={setLoaded}
            />
          }
        />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
      {!loaded && <Loader />}
    </div>
  );
}

export default App;
