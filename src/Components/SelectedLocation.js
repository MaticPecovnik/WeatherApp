import React, { useState, useEffect } from "react";
import "./SelectedLocation.css";

const SelectedLocation = ({ match }) => {
  const [forecast, setForecast] = useState([]);

  const locationInfo = {
    cityLocalizedName: match.params.cityName,
    cityCountryID: match.params.countryID,
  };

  useEffect(() => {
    const openWeatherApiKey = "48f6c5dc045dd8ad305f552108ec5d49";
    const openWeatherApiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${locationInfo.cityLocalizedName},${locationInfo.cityCountryID}&appid=${openWeatherApiKey}`;

    fetch(openWeatherApiUrl)
      .then((res) => res.json().then((data) => setForecast(data.list)))
      .catch((err) => console.log(err));
  }, [locationInfo.cityCountryID, locationInfo.cityLocalizedName]);

  return <div>Hello</div>;
};

export default SelectedLocation;
