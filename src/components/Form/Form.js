import React from "react";
import { getGeolocation } from "../../map.service";

function Form({ setLat, setLon, setLoaded }) {
  async function handleSubmit(ev) {
    ev.preventDefault();
    setLoaded(false);
    let data = await getGeolocation(ev.target[0].value);
    setLat(data.lat);
    setLon(data.lon);
  }
  return (
    <form className="App" onSubmit={handleSubmit}>
      <input type="text" required />
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;
