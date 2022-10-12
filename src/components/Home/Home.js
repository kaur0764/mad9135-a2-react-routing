import React from "react";
import { createWeatherIcon } from "../../weather.service";
import "./home.css";

function Home({ forecast, setLoaded, convertTime, address }) {
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
    let img = createWeatherIcon(forecast.current.weather[0].icon);
    setTimeout(setLoaded, 800, true);
    if (address["country_code"]) {
      address["country_code"] = address["country_code"].toUpperCase();
    }
    return (
      <div className="current show">
        <p className="address">
          <i className="material-icons">&#xe0c8;</i>
          {address.state}, {address["country_code"]}
        </p>
        <div>
          <p className="temp">
            {forecast.current.temp}
            {`\u00B0`}
          </p>
          <p className="feelsLike">
            Feels like
            <br />
            {forecast.current.feels_like}
            {`\u00B0`}
          </p>
        </div>
        <div>
          <img className="homeImg" src={img.src} />
          <p>{forecast.current.weather[0].main}</p>
        </div>
        <div>
          <p>Wind {forecast.current.wind_speed}m/s</p>
          <p> Humidity {forecast.current.humidity}%</p>
        </div>
        <div>
          <p>
            Sunrise {sunriseTime.hours}:{sunriseTime.minutes.slice(-2)} am
          </p>
          <p>
            Sunset {sunsetTime.hours}:{sunsetTime.minutes.slice(-2)} pm
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
