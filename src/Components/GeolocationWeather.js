import React from "react";
import useCurrentLocationWeather from "../Hooks/useCurrentLocationWeather";
import { Link } from "react-router-dom";

import HeaderCurrentWeather from "../Containers/HeaderCurrentWeather";
import HeaderDayForecast from "../Containers/HeaderDayForecast";

import "./GeolocationWeather.css";

const GeolocationWeather = () => {
  const [
    locationInfo,
    currentWeatherInfo,
    forecast,
  ] = useCurrentLocationWeather();

  if (
    locationInfo.LocationName !== "" &&
    currentWeatherInfo.WeatherText !== "" &&
    forecast.length !== 0
  ) {
    return (
      <div className="current_location_sub">
        <Link
          to={{
            pathname: `/location/${locationInfo.LocationName}/${locationInfo.CountryName}`,
            state: locationInfo.apiLocalID,
          }}
          className="weather__container_sup"
        >
          <HeaderCurrentWeather
            locationInfo={locationInfo}
            currentWeatherInfo={currentWeatherInfo}
          />
        </Link>
        <div className="forecast__container">
          {forecast.map((dailyForecast, i) => {
            return <HeaderDayForecast key={i} dailyForecast={dailyForecast} />;
          })}
        </div>
      </div>
    );
  } else {
    return <React.Fragment></React.Fragment>;
  }
};

export default GeolocationWeather;
