import React from "react";
import List from "../List/List";

function Daily({ forecast, convertTime, setLoaded }) {
  if (forecast) {
    setTimeout(setLoaded, 800, true);
    let dailyForecast = [];
    for (let i = 1; i <= 6; i++) {
      dailyForecast.push(forecast.daily[i]);
    }
    console.log(dailyForecast);
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
  }
}
export default Daily;
