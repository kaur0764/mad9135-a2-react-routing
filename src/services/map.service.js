const API_TOKEN = "pk.4fd28a783c977caa858d54f291bb7c9c";
const BASE_URL = "https://us1.locationiq.com/v1";

export async function getGeolocation(location) {
  const url = `${BASE_URL}/search.php?key=${API_TOKEN}&q=${location}&format=json`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return { lat: data[0].lat, lon: data[0].lon };
}

export async function getReverseGeolocation(lat, long) {
  const url = `${BASE_URL}/reverse?key=${API_TOKEN}&lat=${lat}&lon=${long}&format=json`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data.address;
}
