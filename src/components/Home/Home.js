import React from "react";
import "./home.css";

function Home({ forecast, setLoaded }) {
  if (!forecast) {
    return (
      <p>
        Welcome! Please enter the name of the location to get weather
        information
      </p>
    );
  } else {
    console.log(forecast);
    function convertTime(timestamp) {
      let time = new Date(timestamp * 1000);
      let hours = time.getHours();
      if (hours > 12) {
        hours = hours - 12;
      }
      let minutes = "0" + time.getMinutes();
      return { hours, minutes };
    }

    let sunriseTime = convertTime(forecast.sys.sunrise);
    let sunsetTime = convertTime(forecast.sys.sunset);

    convertTime(1665054440);
    setTimeout(setLoaded, 800, true);
    return (
      <>
        <p className="temp">{`${forecast.main.temp}\u00B0`}</p>
        <p>
          {`\u2191${forecast.main.temp_max}\u00B0 \u2193${forecast.main.temp_min}\u00B0 feels like ${forecast.main.feels_like}\u00B0`}
        </p>
        <p>
          Wind {forecast.wind.speed} Humidity {forecast.main.humidity}
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
