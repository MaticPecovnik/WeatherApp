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
    const dd = String(localTime.getDate()).padStart(2, "0");
    const mm = String(localTime.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = localTime.getFullYear();

    return hh + ":" + nn + ":" + ss + " " + dd + "/" + mm + "/" + yyyy;
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

  return (
    <div className="pop_location_card__container">
      <div className="name__container">{locationInfo.locationName}</div>
      <div className="image__container">
        <img
          src={locationInfo.locationImageUrl}
          alt={locationInfo.locationName}
          className="popular_loc_image"
        ></img>
      </div>
    </div>
  );
};

export default PopularLocationsCard;
