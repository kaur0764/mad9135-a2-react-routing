import React from "react";
import List from "../List/List";
import "./hourly.css";

function Hourly({ forecast, convertTime, setLoaded }) {
  if (forecast) {
    setTimeout(setLoaded, 3000, true);
    let hourlyForecast = [];
    for (let i = 1; i <= 6; i++) {
      hourlyForecast.push(forecast.hourly[i]);
    }
    return (
      <ul className="hourlyList">
        {hourlyForecast.map((forecast) => (
          <List
            key={forecast.dt}
            forecast={forecast}
            convertTime={convertTime}
          />
        ))}
      </ul>
    );
  } else {
    return (
      <p className="paraHourly">
        Please enter the name of the location to get weather information
      </p>
    );
  }
}
export default Hourly;
