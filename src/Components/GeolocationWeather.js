import React from "react";
import useGeolocation from "../Hooks/useGeolocation";

const GeolocationWeather = () => {
  const [locationInfo, currentWeatherInfo] = useGeolocation();
  console.log(locationInfo);
  console.log(currentWeatherInfo);

  return <div></div>;
};

export default GeolocationWeather;
