import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getForecast } from "./services/weather.service";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Hourly from "./components/Hourly/Hourly";
import Daily from "./components/Daily/Daily";
import FourOhFour from "./components/FourOhFour/FourOhFour";
import useLocalStorage from "./hooks/useLocalStorage";
import { getReverseGeolocation } from "./services/map.service";

function App() {
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");
  const [forecast, setForecast] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [location, setLocation] = useLocalStorage("ReactRouting", []);
  const [address, setAddress] = useState("");
  let [currentPosition, setCurrentPosition] = useState({});

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        setCurrentPosition({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    if (lat && lon) {
      getData();
      getAddress();
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

  const getAddress = async () => {
    let data = await getReverseGeolocation(lat, lon);
    setAddress(data);
  };

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
    let minutes = "0" + time.getMinutes();
    minutes = minutes.substring(minutes.length - 2);
    let timeString = time.toDateString();
    let date = timeString.substring(timeString.indexOf(" ") + 1);
    let day = timeString.substring(0, timeString.indexOf(" "));
    return { hours, minutes, date, day };
  }

  function handleCurrentButton() {
    setLoaded(false);
    setLat(currentPosition.lat);
    setLon(currentPosition.lon);
  }

  return (
    <div className="App">
      <Header
        setLat={setLat}
        setLon={setLon}
        setLoaded={setLoaded}
        location={location}
        setLocation={setLocation}
      />
      <NavBar
        location={location}
        setLat={setLat}
        setLon={setLon}
        setLoaded={setLoaded}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <Home
              forecast={forecast}
              setLoaded={setLoaded}
              convertTime={convertTime}
              address={address}
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
        <Route
          path="/daily"
          element={
            <Daily
              forecast={forecast}
              convertTime={convertTime}
              setLoaded={setLoaded}
            />
          }
        />
        <Route path="*" element={<FourOhFour setLoaded={setLoaded} />} />
      </Routes>
      <button className="currentLocationButton" onClick={handleCurrentButton}>
        <i className="material-icons humidity">&#xe55c;</i>
      </button>
      {!loaded && <Loader />}
    </div>
  );
}

export default App;
