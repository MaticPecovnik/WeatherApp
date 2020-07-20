import React from "react";
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

  if (
    fullLocationInfo.cityInfo !== undefined &&
    forecastInfo.length > 0 &&
    currentWeatherInfo.temperature !== {}
  ) {
    console.log(currentWeatherInfo);
    return (
      <div className="selected_location__container">
        <div className="basic_info__container">
          <div className="city_name__container">
            {fullLocationInfo.cityInfo.cityName},{" "}
            {fullLocationInfo.countryInfo.countryName}
          </div>
          <div className="longitude">
            Longitude:{" "}
            <span style={{ fontWeight: 600 }}>
              {fullLocationInfo.cityInfo.coords.x}
            </span>
          </div>
          <div className="latitude">
            Latitude:{" "}
            <span style={{ fontWeight: 600 }}>
              {fullLocationInfo.cityInfo.coords.y}
            </span>
          </div>
          <div className="elevation">
            Elevation:{" "}
            <span style={{ fontWeight: 600 }}>
              {fullLocationInfo.cityInfo.elevation}m
            </span>
          </div>
        </div>
        <div className="current_info__container">
          <img
            className="current_weather_icon"
            src={currentWeatherInfo.weather.iconUrl}
            alt={currentWeatherInfo.weather.description}
          ></img>
          <span>
            {currentWeatherInfo.temperature.trueTemperature}&#8451; (feels like{" "}
            {currentWeatherInfo.temperature.feelsLikeTemperature}&#8451;)
          </span>
        </div>
        <div className="forecast_info__container"></div>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default SelectedLocation;
