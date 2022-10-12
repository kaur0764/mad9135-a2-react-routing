import React from "react";
import { getGeolocation } from "../../map.service";

function PreviousSearches({ item, setLat, setLon, setLoaded }) {
  async function handleSearchClick(ev) {
    setLoaded(false);
    ev.preventDefault(ev);
    let data = await getGeolocation(ev.target.textContent);
    setLat(data.lat);
    setLon(data.lon);
  }

  return <button onClick={handleSearchClick}>{item}</button>;
}

export default PreviousSearches;
