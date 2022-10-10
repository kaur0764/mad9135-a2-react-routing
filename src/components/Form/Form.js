import React from "react";
import { getGeolocation } from "../../map.service";
import useLocalStorage from "../../hooks/useLocalStorage";

function Form({ setLat, setLon, setLoaded }) {
  const [location, setLocation] = useLocalStorage("ReactRouting", []);
  async function handleSubmit(ev) {
    ev.preventDefault();
    setLoaded(false);
    let data = await getGeolocation(ev.target[0].value);
    setLat(data.lat);
    setLon(data.lon);
    if (location.length >= 2) {
      setLocation(location.splice(-2).concat(ev.target[0].value));
    } else {
      setLocation(location.concat(ev.target[0].value));
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
