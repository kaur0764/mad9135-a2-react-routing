import React from "react";
import "./list.css";

function List({ hourForecast, convertTime }) {
  let time = convertTime(hourForecast.dt);
  const formatedDate = new Date(hourForecast.dt * 1000);

  return (
    <li>
      <p>
        {time.hours}:{time.minutes}
      </p>
      <p>{time.date}</p>
      <p>{time.day}</p>
      <p>
        feels like {hourForecast.feels_like}
        {`\u00B0`}
      </p>
      <p>{hourForecast.weather[0].description}</p>
    </li>
  );
}

export default List;
