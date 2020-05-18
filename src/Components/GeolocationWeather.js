import React from "react";
import useCurrentLocationWeather from "../Hooks/useCurrentLocationWeather";

import HeaderCurrentWeather from "../Containers/HeaderCurrentWeather";
import HeaderDayForecast from "../Containers/HeaderDayForecast";

const GeolocationWeather = () => {
  const [
    locationInfo,
    currentWeatherInfo,
    forecast,
  ] = useCurrentLocationWeather();

  if (
    locationInfo.LocalizedName !== "" &&
    currentWeatherInfo.WeatherText !== "" &&
    forecast.length !== 0
  ) {
    return (
      <React.Fragment>
        <HeaderCurrentWeather
          locationInfo={locationInfo}
          currentWeatherInfo={currentWeatherInfo}
        />
        <div className="forecast__container">
          {forecast.map((dailyForecast, i) => {
            return <HeaderDayForecast key={i} dailyForecast={dailyForecast} />;
          })}
        </div>
      </React.Fragment>
    );
  } else {
    return <React.Fragment></React.Fragment>;
  }
};

export default GeolocationWeather;
