import React from "react";
import "./home.css";

function Home({ forecast, setLoaded, convertTime }) {
  if (!forecast) {
    return (
      <p>
        Welcome! Please enter the name of the location to get weather
        information
      </p>
    );
  } else {
    let sunriseTime = convertTime(forecast.current.sunrise);
    let sunsetTime = convertTime(forecast.current.sunset);
    convertTime(1665054440);
    setTimeout(setLoaded, 800, true);
    return (
      <>
        <p className="temp">{`${forecast.current.temp}\u00B0`}</p>
        <p>{`feels like ${forecast.current.feels_like}\u00B0`}</p>
        <p> {forecast.current.weather[0].main}</p>
        <p>
          Wind {forecast.current.wind_speed}m/s Humidity{" "}
          {forecast.current.humidity}%
        </p>
        <p>
          Sunrise {sunriseTime.hours}:{sunriseTime.minutes.slice(-2)} am Sunset{" "}
          {sunsetTime.hours}:{sunsetTime.minutes.slice(-2)} pm
        </p>
      </>
    );
  }
}

export default Home;
