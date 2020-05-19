import React from "react";

import useDate from "../Hooks/useDate";

import "./HeaderCurrentWeather.css";

const HeaderCurrentWeather = ({ locationInfo, currentWeatherInfo }) => {
  //gets current Date
  const today = useDate();
  //url for weather icon that represents the state of current weather
  let apiWeatherIconUrl;

  currentWeatherInfo.WeatherIcon >= 10
    ? (apiWeatherIconUrl = `https://developer.accuweather.com/sites/default/files/${currentWeatherInfo.WeatherIcon}-s.png`)
    : (apiWeatherIconUrl = `https://developer.accuweather.com/sites/default/files/0${currentWeatherInfo.WeatherIcon}-s.png`);

  return (
    <div className="weather__container_sub">
      <div className="date__container">
        <center>{today}</center>
      </div>
      <div className="location_info__container">
        <div className="location__container">
          {locationInfo.LocationName}, {locationInfo.CountryName}
        </div>
        <div className="coordinates__container">
          {locationInfo.coords.latitude}, {locationInfo.coords.longitude}
        </div>
        <div className="weather__container">
          {currentWeatherInfo.WeatherText}, {currentWeatherInfo.temperature}
          &#8451;
        </div>
      </div>
      <div className="current_weather__container">
        <img
          src={apiWeatherIconUrl}
          alt={currentWeatherInfo.WeatherText}
          className="weather_icon"
        ></img>
      </div>
    </div>
  );
};

export default HeaderCurrentWeather;
