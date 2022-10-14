import React from "react";
import { createWeatherIcon } from "../../services/weather.service";
import "./list.css";

function List({ forecast, convertTime }) {
  let time = convertTime(forecast.dt);
  const formatedDate = new Date(forecast.dt * 1000);
  let timeSuffix = "am";
  if (time.hours > 12) {
    time.hours = time.hours - 12;
    timeSuffix = "pm";
  }
  let temp = [];
  if (typeof forecast.temp == "number") {
    temp[0] = `${forecast.temp}\u00B0`;
    temp[1] = `feels like ${forecast.feels_like}\u00B0`;
  } else {
    temp[0] = `Day ${forecast.temp.day}\u00B0 feels like ${forecast.feels_like.day}\u00B0`;
    temp[1] = `Night ${forecast.temp.night}\u00B0 feels like ${forecast.feels_like.night}\u00B0`;
  }
  let img = createWeatherIcon(forecast.weather[0].icon);
  console.log(img);
  return (
    <li>
      <p>
        {time.hours}:{time.minutes}
        {timeSuffix}
      </p>
      <p>{time.date}</p>
      <p>{time.day}</p>
      <p>{temp[0]}</p>
      <p>{temp[1]}</p>
      <p>{forecast.weather[0].description}</p>
      <img src={img.src} alt="wether-icon" />
    </li>
  );
}

export default List;
