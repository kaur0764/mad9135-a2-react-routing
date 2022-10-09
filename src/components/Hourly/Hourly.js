import React, { Fragment } from "react";
import List from "../List/List";

function Hourly({ forecast, convertTime, setLoaded }) {
  if (forecast) {
    setTimeout(setLoaded, 800, true);
    let hourForecastArray = [];
    for (let i = 6; i >= 1; i--) {
      hourForecastArray.push(forecast.hourly[forecast["hourly"].length - i]);
    }
    return (
      <ul className="hourlyList">
        {hourForecastArray.map((hourForecast) => (
          <List
            key={hourForecast.dt}
            hourForecast={hourForecast}
            convertTime={convertTime}
          />
        ))}
      </ul>
    );
  }
}
export default Hourly;
