import React from "react";
import List from "../List/List";
import "./daily.css";

function Daily({ forecast, convertTime, setLoaded }) {
  if (forecast) {
    setTimeout(setLoaded, 3000, true);
    let dailyForecast = [];
    for (let i = 1; i <= 6; i++) {
      dailyForecast.push(forecast.daily[i]);
    }
    return (
      <ul className="dailyList">
        {dailyForecast.map((forecast) => (
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
      <p className="paraDaily">
        Please enter the name of the location to get weather information
      </p>
    );
  }
}
export default Daily;
