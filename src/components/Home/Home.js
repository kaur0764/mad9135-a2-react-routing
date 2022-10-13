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
    setTimeout(setLoaded, 3000, true);
    let state = "";
    let country = "";
    if (address.state) {
      state = `${address.state}, `;
    }
    if (address["country_code"]) {
      country = address["country_code"].toUpperCase();
    }
    return (
      <div className="current show">
        <p className="address">
          <i className="material-icons">&#xe0c8;</i>
          {state}
          {country}
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
        <div className="iconsDiv">
          <p>
            <i className="material-icons wind">&#xefd8;</i>{" "}
            {forecast.current.wind_speed}m/s
          </p>
          <p>
            <i className="material-icons humidity">&#xe798;</i>{" "}
            {forecast.current.humidity}%
          </p>
        </div>
        <div>
          <p className="sunrise">
            <svg style={{ width: "32px", height: "32px" }} viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M5,16H19A1,1 0 0,1 20,17A1,1 0 0,1 19,18H5A1,1 0 0,1 4,17A1,1 0 0,1 5,16M17,20A1,1 0 0,1 18,21A1,1 0 0,1 17,22H7A1,1 0 0,1 6,21A1,1 0 0,1 7,20H17M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7Z"
              />
            </svg>
            Sunrise {sunriseTime.hours}:{sunriseTime.minutes.slice(-2)} am
          </p>
          <p className="sunset">
            <svg style={{ width: "32px", height: "32px" }} viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M5,16H19A1,1 0 0,1 20,17A1,1 0 0,1 19,18H5A1,1 0 0,1 4,17A1,1 0 0,1 5,16M17,20A1,1 0 0,1 18,21A1,1 0 0,1 17,22H7A1,1 0 0,1 6,21A1,1 0 0,1 7,20H17M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7Z"
              />
            </svg>
            Sunset {sunsetTime.hours}:{sunsetTime.minutes.slice(-2)} pm
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
