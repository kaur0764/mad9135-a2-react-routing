import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialState) {
  const [location, setLocation] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(location));
  }, [key, location]);

  return [location, setLocation];
}
