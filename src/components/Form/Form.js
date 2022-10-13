import React from "react";
import { getGeolocation } from "../../services/map.service";
import "./form.css";

function Form({ setLat, setLon, setLoaded, location, setLocation }) {
  async function handleSubmit(ev) {
    ev.preventDefault();
    const value = ev.target[0].value;
    let form = document.querySelector("#searchForm");
    form.reset();
    setLoaded(false);
    let data = await getGeolocation(value);
    setLat(data.lat);
    setLon(data.lon);
    const newLocationLowered = value.toLowerCase();
    const newLocation =
      newLocationLowered.charAt(0).toUpperCase() +
      newLocationLowered.substring(1);
    if (!location.includes(newLocation)) {
      if (location.length >= 2) {
        setLocation(location.splice(-2).concat(newLocation));
      } else {
        setLocation(location.concat(newLocation));
      }
    }
  }
  return (
    <form id="searchForm" className="App" onSubmit={handleSubmit}>
      <input type="text" required />
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;
