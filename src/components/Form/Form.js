import React from "react";
import { getGeolocation } from "../../map.service";

function Form({ setLat, setLon, setLoaded, location, setLocation }) {
  async function handleSubmit(ev) {
    ev.preventDefault();
    setLoaded(false);
    let data = await getGeolocation(ev.target[0].value);
    setLat(data.lat);
    setLon(data.lon);
    const newLocationLowered = ev.target[0].value.toLowerCase();
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
    <form className="App" onSubmit={handleSubmit}>
      <input type="text" required />
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;
