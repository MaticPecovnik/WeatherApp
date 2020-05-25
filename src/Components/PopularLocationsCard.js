/* eslint-disable no-extend-native */
import React from "react";
import "./PopularLocationsCard.css";

import usePopularLocationImage from "../Hooks/usePopularLocationImage";

const PopularLocationsCard = ({ location }) => {
  //calculates the local time based on the locations GMT offset
  const getLocalTime = (timeZoneOffset) => {
    Date.prototype.addHours = function (h) {
      this.setTime(this.getTime() + h * 60 * 60 * 1000);
      return this;
    };

    const localTime = new Date().addHours(2 - timeZoneOffset);

    const ss = String(localTime.getSeconds()).padStart(2, "0");
    const nn = String(localTime.getMinutes()).padStart(2, "0");
    const hh = String(localTime.getHours()).padStart(2, "0");
    //const dd = String(localTime.getDate()).padStart(2, "0");
    //const mm = String(localTime.getMonth() + 1).padStart(2, "0"); //January is 0!
    //const yyyy = localTime.getFullYear();

    return hh + ":" + nn + ":" + ss;
  };

  const locationInfo = {
    locationName: location.LocalizedName,
    locationCountryName: location.Country.ID,
    apiLocationKey: location.Key,
    locationCoords: location.GeoPosition,
    locationLocalTime: getLocalTime(location.TimeZone.GmtOffset),
    locationImageUrl: usePopularLocationImage(location.LocalizedName),
  };

  const locationCurrentWeather = {
    locationWeatherText: location.WeatherText,
    locationWeatherIcon: location.WeatherIcon,
    locationTemperature: Math.floor(location.Temperature.Metric.Value),
  };

  let apiWeatherIconUrl;

  locationCurrentWeather.locationWeatherIcon >= 10
    ? (apiWeatherIconUrl = `https://developer.accuweather.com/sites/default/files/${locationCurrentWeather.locationWeatherIcon}-s.png`)
    : (apiWeatherIconUrl = `https://developer.accuweather.com/sites/default/files/0${locationCurrentWeather.locationWeatherIcon}-s.png`);

  return (
    <div className="pop_location_card__container">
      <div className="general_info__container">
        <div className="name__container">
          {locationInfo.locationName}, {locationInfo.locationCountryName}
        </div>
        <div className="coordinates__container">
          {Math.floor(locationInfo.locationCoords.Latitude * 1000) / 1000},{" "}
          {Math.floor(locationInfo.locationCoords.Longitude * 1000) / 1000}
        </div>
      </div>
      <div className="image__container">
        <img
          alt={locationInfo.locationName}
          className="popular_location_image"
          src={locationInfo.locationImageUrl}
        ></img>
      </div>
      <div className="all_info__container">
        <div className="weather_info__container">
          {locationCurrentWeather.locationWeatherText},{" "}
          {locationCurrentWeather.locationTemperature}&#8451;
        </div>
        <div className="weather_icon__container">
          <img
            src={apiWeatherIconUrl}
            alt={locationCurrentWeather.WeatherText}
            className="weather_icon"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default PopularLocationsCard;
