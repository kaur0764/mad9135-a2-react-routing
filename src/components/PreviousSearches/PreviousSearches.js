import React from "react";
import { getGeolocation } from "../../map.service";

function PreviousSearches({ item, setLat, setLon }) {
  async function handleSearchClick(ev) {
    ev.preventDefault(ev);
    let data = await getGeolocation(ev.target.textContent);
    setLat(data.lat);
    setLon(data.lon);
  }

  return <button onClick={handleSearchClick}>{item}</button>;
}

export default PreviousSearches;
