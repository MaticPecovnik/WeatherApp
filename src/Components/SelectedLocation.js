import React, { useState, useEffect } from "react";
import "./SelectedLocation.css";
import useSelectedLocationWeather from "../Hooks/useSelectedLocationWeather";

const SelectedLocation = (props) => {
  const inputLocationInfo = {
    cityLocalizedName: props.match.params.cityName,
    cityCountryID: props.match.params.countryID,
    cityKey: props.location.state,
  };

  const [
    forecastInfo,
    currentWeatherInfo,
    fullLocationInfo,
  ] = useSelectedLocationWeather(
    inputLocationInfo.cityLocalizedName,
    inputLocationInfo.cityCountryID,
    inputLocationInfo.cityKey
  );

  return <div></div>;
};

export default SelectedLocation;
