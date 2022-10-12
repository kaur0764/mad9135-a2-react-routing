import React from "react";
import List from "../List/List";

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
  }
}
export default Hourly;
